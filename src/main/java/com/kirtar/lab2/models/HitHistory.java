package com.kirtar.lab2.models;

import java.util.ArrayList;
import java.util.List;

public class HitHistory {
    private List<Hit> hitHistory;


    public HitHistory() {
        hitHistory = new ArrayList<>();
    }


    public List<Hit> getHitHistory() {
        return hitHistory;
    }

    public void setHitHistory(List<Hit> hitList) {
        this.hitHistory = hitList;
    }

    @Override
    public String toString() {
        return "HitHistory{" +
                "hitHistory=" + hitHistory +
                '}';
    }
}
