package com.kirtar.lab2.servlets;

import com.kirtar.lab2.models.HitHistory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/clear-history")
public class ClearHistoryServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        HitHistory hitHistory =  (HitHistory) request.getSession().getAttribute("history");
        if (hitHistory == null ) hitHistory = new HitHistory();
        hitHistory.getHitHistory().clear();
        request.getSession().setAttribute("history",hitHistory);
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
