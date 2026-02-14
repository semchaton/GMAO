package com.gmao.backend.emplacement.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.gmao.backend.emplacement.model.Emplacement;

@Repository
public class EmplacementRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Emplacement> findAll(){
        String sql="""
            SELECT 
                e.ID_EMPLACEMENT,
                e.NOM_EMPLACEMENT,
                e.BATIMENT_DE_EMPLACEMENT
            FROM 
                EMPLACEMENT e
        
            """;
        return jdbcTemplate.query(sql, (rs, rowNum) ->
            new Emplacement(
                rs.getInt("ID_EMPLACEMENT"),
                rs.getString("NOM_EMPLACEMENT"),
                rs.getInt("BATIMENT_DE_EMPLACEMENT")
            )
        );
    };


}

