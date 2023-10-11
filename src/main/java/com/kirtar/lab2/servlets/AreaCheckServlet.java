package com.kirtar.lab2.servlets;

import com.kirtar.lab2.models.Hit;
import com.kirtar.lab2.models.HitHistory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@WebServlet("/check-area")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
//        request.setCharacterEncoding("UTF-8");
        long startTime = System.currentTimeMillis();

        String xString = request.getParameter("x");
        String yString = request.getParameter("y").replace(',', '.');
        String rString = request.getParameter("r");
        boolean isValidInput = checkValueRange(xString, yString, rString);

        if (isValidInput) {
            int x = Integer.parseInt(xString);
            double y= Double.parseDouble(yString);
            int r = Integer.parseInt(rString);
            System.out.println("Ареаче");
            boolean isHit = hit(x, y, r);

            //OffsetDateTime currentTimeObject = OffsetDateTime.now(ZoneOffset.UTC);

            ZoneId zone = ZoneId.of("Europe/Moscow");
            ZonedDateTime time = ZonedDateTime.now(zone);
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String currentTime = time.format(formatter);
            String executionTime = String.valueOf(System.currentTimeMillis() - startTime);

            HitHistory hitHistory = (HitHistory) request.getSession().getAttribute("history");
            //if (hitHistory == null) hitHistory = new HitHistory();
            hitHistory.getHitHistory().add(new Hit(x, y, r, isHit, currentTime, executionTime));
            request.getSession().setAttribute("history", hitHistory);
        }

        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    private boolean checkValueRange(String xString,String yString, String rString) {
        try {
            Integer[] xRange = {-4, -3, -2, -1, 0, 1, 2, 3, 4};
            int x = Integer.parseInt(xString);

            double y = Double.parseDouble(yString);

            Integer[] rRange = {1, 2, 3, 4, 5};
            int r = Integer.parseInt(rString);

            return Arrays.asList(xRange).contains(x) && (y>-3 && y<3) &&
                    Arrays.asList(rRange).contains(r);

        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean hit(int x,double y,int r) {
        boolean rectangle = x<=0 && x>=r && y<=0 && y>= (double) -r /2;
        boolean triangle = x<=0 && y>=0 && x>=-r && y<=r && y<=x+r;
        boolean quadrant = y>=0 && y<=r && x>=0 && x<=r && x*x+y*y<=r*r;
        return rectangle && triangle && quadrant;
    }

}
