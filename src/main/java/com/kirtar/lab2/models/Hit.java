package com.kirtar.lab2.models;

import java.io.Serializable;
public class Hit implements Serializable{
    private double x;
    private double y;
    private int r;
    private String currentTime;
    private String executionTime;
    private boolean hit;

    public Hit(){
        this.currentTime = "";
        this.executionTime = "";
    }

    public Hit(double x, double y, int r, boolean hit, String currentTime, String executionTime){
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.currentTime = currentTime;
        this.executionTime = executionTime;
    }

    public double getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentDate) {
        this.currentTime = currentDate;
    }

    public String getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(String executionTime) {
        this.executionTime = executionTime;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    @Override
    public String toString() {
        return "Hit{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", hit=" + hit+ '\'' +
                ", currentTime='" + currentTime + '\'' +
                 ", executionTime='" + executionTime +
                '}';
    }
}




