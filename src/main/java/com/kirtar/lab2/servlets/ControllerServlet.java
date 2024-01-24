package com.kirtar.lab2.servlets;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;



@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        BufferedReader reader = request.getReader();
        String line;
        StringBuilder requestBody = new StringBuilder();
        while ((line = reader.readLine()) != null) {
            requestBody.append(line);
        }
        Gson gson = new Gson();
        Map<String, Object> map = gson.fromJson(requestBody.toString(), Map.class);
        String x,y,r;
        if (!(map.get("x") instanceof String)){x=Double.toString((Double)map.get("x"));}
        else{x = (String) map.get("x");}
        if (!(map.get("y") instanceof String)){y=Double.toString((Double)map.get("y"));}
        else{y = (String) map.get("y");}
        if (!(map.get("r") instanceof String)){r=Double.toString((Double)map.get("r"));}
        else{r = (String) map.get("r");}
        request.setAttribute("x",x);
        request.setAttribute("y",y);
        request.setAttribute("r",r);

        if (request.getParameter("clearhistory") != null && request.getParameter("clearhistory").equals("true")) {
            getServletContext().getRequestDispatcher("/clear-history").forward(request, response);

        }
            else if (map.get("x")!=null && map.get("y")!=null && map.get("r")!=null){
            getServletContext().getRequestDispatcher("/check-area").forward(request, response);
        } else {
            sendError(response, "Data is incorrect");
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }
    public static void sendError(HttpServletResponse resp, String message) throws IOException {
        Gson json = new Gson();
        Map<String, Object> jsonResponse = new HashMap<>() {{
            put("error", "Data is incorrect");
            put("status", "UNPROCESSABLE_ENTITY");
        }};

        resp.setContentType("application/json");
        resp.getWriter().write(json.toJson(jsonResponse));
        resp.setStatus(422);
    }
}

