<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%
    //System.out.println(request.getParameter("p1"));
    //System.out.println(request.getParameter("p2"));
    int p1 = Integer.parseInt(request.getParameter("p1"));
    int p2 = Integer.parseInt(request.getParameter("p2"));
    int result = p1+p2;
    //Thread.sleep(7000);
%>

{
  "result" : <%=result %>,
  "p1" : <%=p1 %>,
  "p2" : <%=p2 %>
}
