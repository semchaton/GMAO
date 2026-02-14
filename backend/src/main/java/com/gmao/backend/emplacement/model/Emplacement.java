package com.gmao.backend.emplacement.model;

public class Emplacement {
    private int idEmplacement;
    private String nomEmplacement;
    private int batimentDeEmplacement;

    public Emplacement(){

    }

    public Emplacement(int idEmplacement, String nomEmplacement, int batimentDeEmplacement) {
        this.idEmplacement = idEmplacement;
        this.nomEmplacement = nomEmplacement;
        this.batimentDeEmplacement = batimentDeEmplacement;
    }

    public int getIdEmplacement() {
        return idEmplacement;
    }

    public void setIdEmplacement(int idEmplacement) {
        this.idEmplacement = idEmplacement;
    }

    public String getNomEmplacement() {
        return nomEmplacement;
    }

    public void setNomEmplacement(String nomEmplacement) {
        this.nomEmplacement = nomEmplacement;
    }

    public int getBatimentDeEmplacement() {
        return batimentDeEmplacement;
    }

    public void setBatimentDeEmplacement(int batimentDeEmplacement) {
        this.batimentDeEmplacement = batimentDeEmplacement;
    }

 
    
}
