/*!
 ======================================================================== 
 * Project   : freewebclub-templage(프리웹클럽 템플릿) v0.0.1
 * Producer  : 매스티지, http://freewebclub.com/
 * Publisher : Ho, Jong-Mun (hjm01@naver.com), (http://demun.tistory.com)
 * Build     : 2015-04-29
 * License   : CC BY-ND (http://creativecommons.org/licenses/by/2.0/kr/)
 ======================================================================== 
 */
!function(){var a=$(".accordion"),b=a.find(".accordion-toggle"),c=a.find(".accordion-body"),d="glyphicon glyphicon-chevron-up",e="glyphicon glyphicon-chevron-down";b.on("click",function(){var a=$(this).find("i");a.attr("class")===d?(b.removeClass("active"),c.removeClass("active"),a.attr("class",e)):(b.removeClass("active"),c.removeClass("active"),$(this).addClass("active"),$(this).parent().next().children(".accordion-body").addClass("active"),a.attr("class",d))})}();