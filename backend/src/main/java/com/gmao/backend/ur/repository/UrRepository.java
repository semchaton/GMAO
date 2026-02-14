package com.gmao.backend.ur.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.gmao.backend.ur.model.Ur;

@Repository
public class UrRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Ur> findAll(){
        String sql="""
            SELECT 
                ur.ID_UR,
                ur.NOM_UR,
                ur.DESCRIPTION_UR,
                ur.BATIMENT_DE_UR
            FROM 
                UR ur
        
            """;
        return jdbcTemplate.query(sql, (rs, rowNum) ->
            new Ur(
                rs.getInt("ID_UR"),
                rs.getString("NOM_UR"),
                rs.getString("DESCRIPTION_UR"),
                rs.getInt("BATIMENT_DE_UR")
            )
        );
    };


}

