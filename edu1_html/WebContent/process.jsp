<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>process jsp</title>
</head>
<body>

<h2><%= request.getParameter("id") %></h2> 
<h2><%= request.getParameter("pw") %></h2> 

<h1>처리되었습니다.</h1>
</body>
</html>