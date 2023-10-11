package com.kirtar.lab2.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import static java.lang.Integer.parseInt;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }


    @Override
    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
        System.out.println("DOPOST!");
        PrintWriter printWriter = response.getWriter();
        printWriter.println("<html>");
        printWriter.println("<h1>JJJJ</h1>");
        printWriter.print(request.getParameter("x"));
        printWriter.println("</html>");



        if (request.getParameter("clearhistory")!=null && request.getParameter("clearhistory").equals("true")){
            System.out.println("ALLO");
            getServletContext().getRequestDispatcher("/clear-history").forward(request, response);

        }
        else if (request.getParameter("x")!=null && request.getParameter("y")!=null && request.getParameter("r")!=null){
            getServletContext().getRequestDispatcher("/check-area").forward(request, response);
        }
        else{
            System.out.println(request.getParameter("x"));
            System.out.println(request.getParameter("y"));
            System.out.println(request.getParameter("r"));
            System.out.println("434343434343434");
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }


//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
//        System.out.println("DOPOST!");
//        PrintWriter printWriter = response.getWriter();
//        printWriter.println("<html>");
//        printWriter.println("<h1>JJJJ</h1>");
//        printWriter.print(request.getParameter("x"));
//        printWriter.println("</html>");
//
//        if (request.getParameter("clearhistory") != null && request.getParameter("clearhistory").equals("true")) {
//            System.out.println("UFF");
//            getServletContext().getRequestDispatcher("/clear-history").forward(request, response);
//
//        } else {
//            Map<String, String[]> parameterMap = request.getParameterMap();
//
//            if (parameterMap.containsKey("x") && parameterMap.containsKey("y") && parameterMap.containsKey("r")) {
//                String[] xVal = parameterMap.get("x");
//                String[] yVal = parameterMap.get("y");
//                String[] rVal = parameterMap.get("r");
//                System.out.println("Очко");
//                System.out.println(xVal[0]);
//                //if (request.getParameter("x")!=null && request.getParameter("y")!=null && request.getParameter("r")!=null){
//                getServletContext().getRequestDispatcher("/check-area").forward(request, response);
                //}
//            else{
//                System.out.println(request.getParameter("x"));
//                System.out.println(request.getParameter("y"));
//                System.out.println(request.getParameter("r"));
//                System.out.println("434343434343434");
//                getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
//            }
           // }
        //}
//    @Override
//    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
//        System.out.println("DOPOST!");
//        PrintWriter printWriter = response.getWriter();
//        printWriter.println("<html>");
//        printWriter.println("<h1>JJJJ</h1>");
//        printWriter.print(request.getParameter("x"));
//        printWriter.println("</html>");
//        String xVal = request.getParameter("x");  // Это массив, так как может быть несколько значений
//        String yVal = request.getParameter("y");
//        String rVal = request.getParameter("r");
//
//        System.out.println(xVal);
//        System.out.println(yVal);
//        System.out.println(rVal);
//        if (request.getParameter("clearhistory")!=null && request.getParameter("clearhistory").equals("true")){
//            System.out.println("UFF");
//            getServletContext().getRequestDispatcher("/clear-history").forward(request, response);
//
//        }
//        else if (request.getParameter("x")!=null && request.getParameter("y")!=null && request.getParameter("r")!=null){
//            getServletContext().getRequestDispatcher("/check-area").forward(request, response);
//        }
//        else{
//            System.out.println(request.getParameter("x"));
//            System.out.println(request.getParameter("y"));
//            System.out.println(request.getParameter("r"));
//            System.out.println("434343434343434");
//            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
//        }
    //}


}//}


//    @Override
//    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
//        System.out.println("DOPOST!");
//        PrintWriter printWriter = response.getWriter();
//        printWriter.println("<html>");
//        printWriter.println("<h1>JJJJ</h1>");
//        printWriter.print(request.getParameter("x"));
//        printWriter.println("</html>");
//
//        if (request.getParameter("clearhistory")!=null && request.getParameter("clearhistory").equals("true")){
//            System.out.println("UFF");
//            getServletContext().getRequestDispatcher("/clear-history").forward(request, response);
//
//        }
//        else if (request.getParameter("x")!=null && request.getParameter("y")!=null && request.getParameter("r")!=null){
//            getServletContext().getRequestDispatcher("/check-area").forward(request, response);
//        }
//        else{
//            System.out.println(request.getParameter("x"));
//            System.out.println(request.getParameter("y"));
//            System.out.println(request.getParameter("r"));
//            System.out.println("434343434343434");
//            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
//        }
//    }