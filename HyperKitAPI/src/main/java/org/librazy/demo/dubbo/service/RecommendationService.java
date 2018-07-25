package org.librazy.demo.dubbo.service;

import java.math.BigInteger;
import java.util.List;


import org.librazy.demo.dubbo.model.RecommendBlogEntry;

public interface RecommendationService {
	
	List<String> ikAnalyze(String content);
	
	BigInteger hash(String source);
	
	String simhash(List<String> ik);
	
	//BigInteger getSimhash(long id);
	
	//Map<BigInteger,BigInteger> getAllSimhash();//BigInteger1�ǲ���id��BigInteger2��simhashֵ��
	
	//int hammingDistance(BigInteger simhash1,BigInteger simhash2);
	
	List<RecommendBlogEntry> recommendation(long id);
}
