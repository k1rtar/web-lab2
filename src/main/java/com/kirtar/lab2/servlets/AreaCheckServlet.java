package com.kirtar.lab2.servlets;

import com.kirtar.lab2.models.Hit;
import com.kirtar.lab2.models.HitHistory;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.BufferedReader;
import java.io.IOException;
import java.text.DecimalFormat;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Map;

import com.google.gson.Gson;

@WebServlet("/check-area")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setCharacterEncoding("UTF-8");
        long startTime = System.currentTimeMillis();

        BufferedReader reader = request.getReader();
        String line;
        StringBuilder requestBody = new StringBuilder();
        while ((line = reader.readLine()) != null) {
            requestBody.append(line);
        }
        Gson gson = new Gson();
        Map<String, Object> map = gson.fromJson(requestBody.toString(), Map.class);
        String xString = (String) request.getAttribute("x");
        String yString = (String) request.getAttribute("y");
        yString = yString.replace(',', '.');
        String rString = (String) request.getAttribute("r");

        boolean isValidInput = checkValueRange(xString, yString, rString);

        if ((isValidInput)) {

            double x = Double.parseDouble(xString);
            double y= Double.parseDouble(yString);
            int r = Integer.parseInt(rString);
            boolean isHit = hit(x, y, r);

            ZoneId zone = ZoneId.of("Europe/Moscow");
            ZonedDateTime time = ZonedDateTime.now(zone);
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String currentTime = time.format(formatter);
            double executionTime = System.currentTimeMillis() - startTime;
            double executionTimeInSeconds = executionTime / 1000000.0; // Переводим микросекунды в секунды
            DecimalFormat df = new DecimalFormat("#.######"); // Форматирование с точностью до 6 знаков после запятой
            DecimalFormat numf = new DecimalFormat("#.###############;-#.##############");
            String formattedExecutionTime = df.format(executionTimeInSeconds);
            String formattedX = numf.format(x).format(String.valueOf(x)).replace(",", ".");
            String formattedY = numf.format(y).format(String.valueOf(y)).replace(",", ".");
            request.setAttribute("formattedExecutionTime", formattedExecutionTime);
            HitHistory hitHistory = (HitHistory) request.getSession().getAttribute("history");
            if (hitHistory == null) hitHistory = new HitHistory();
            hitHistory.getHitHistory().add(new Hit(Double.parseDouble(formattedX), Double.parseDouble(formattedY), r, isHit, currentTime, formattedExecutionTime));
            request.getSession().setAttribute("history", hitHistory);
            String jsonData = gson.toJson(hitHistory);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            response.getWriter().write(jsonData);
            response.setStatus(200);
        }


    }

    private boolean checkValueRange(String xString,String yString, String rString){
        try {
            double x = Double.parseDouble(xString);

            double y = Double.parseDouble(yString);

            Integer[] rRange = {1, 2, 3, 4, 5};
            int r = Integer.parseInt(rString);

            return x<=4 && x>=-4 && (y>-3 && y<3) &&
                    Arrays.asList(rRange).contains(r);

        } catch (NumberFormatException exception) {
            return false;
        }
    }

    private boolean hit(double x,double y,int r) {
        boolean rectangle = x<=0 && x>=-r && y<=0 && y>= (double) -r /2;
        boolean triangle = x<=0 && y>=0 && x>=-r && y<=r && y<=x+r;
        boolean quadrant = y>=0 && y<=r && x>=0 && x<=r && x*x+y*y<=r*r;
        return rectangle || triangle || quadrant;
    }

}
