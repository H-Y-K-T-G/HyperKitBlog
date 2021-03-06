$(() => {
    let registerBtn = $("#register");
    let codeBtn = $("#requestCode");
    let codeIpt = $("#code");
    let emailIpt = $("#email");
    let nickIpt = $("#nick");
    let pwdIpt = $("#password");
    let pwdrIpt = $("#passwordrpt");
    registerBtn.hide();
    codeBtn.click(async (e) => {
        codeBtn.prop("disabled", true);
        let email = emailIpt.val();
        if (!Valid.validEmail(email)) {
            alert("邮箱格式错误");
            codeBtn.prop("disabled", false);
            return;
        }
        try {
            const resp = await Net.postRaw("/code", {
                email: email
            });
            const response = resp.data;
            if (response && response.mock) {
                codeIpt.val(response.mock);
            }
            codeBtn.hide();
            registerBtn.show();
            registerBtn.prop("disabled", false);
        } catch (error) {
            alert("服务器错误，请稍后尝试");
            codeBtn.prop("disabled", false);
        }
    });
    registerBtn.click(async (e) => {
        registerBtn.prop("disabled", true);
        let email = emailIpt.val();
        if (!Valid.validEmail(email)) {
            alert("邮箱格式错误");
            registerBtn.prop("disabled", false);
            return;
        }
        let nick = nickIpt.val();
        let password = pwdIpt.val();
        if (!Valid.validPassword(password)) {
            alert("密码长度应在6~100之间");
            registerBtn.prop("disabled", false);
            return;
        }
        let passwordRpt = pwdrIpt.val();
        if (password !== passwordRpt) {
            alert("两次密码不一致");
            registerBtn.prop("disabled", false);
            return;
        }
        let code = codeIpt.val();
        if (!Valid.validCode(code)) {
            alert("验证码应为6位数字");
            registerBtn.prop("disabled", false);
            return;
        }
        try {
            const {
                respUp,
                respRe
            } = await Srp.doRegister(email, password, nick, code);
            if (!respRe) {
                if (respUp.status === 409) {
                    alert("注册失败 - 验证码错误");
                    registerBtn.prop("disabled", false);
                    return;
                } else {
                    alert("注册失败 - 请检查是否填写正确");
                    registerBtn.prop("disabled", false);
                    return;
                }
            } else if (respRe.status === 201) {
                alert("注册成功");
                window.location.href = "/person.html?id=" + Srp.uid();
                return;
            } else {
                alert("注册失败 - 注册失败，请稍后重试");
                registerBtn.prop("disabled", false);
                return;
            }
        } catch (error) {
            alert("很抱歉 - 服务器异常，请稍后重试");
            console.warn(error);
            registerBtn.prop("disabled", false);
        }
    });
});