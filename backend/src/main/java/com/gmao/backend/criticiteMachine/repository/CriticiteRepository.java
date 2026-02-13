package com.gmao.backend.criticiteMachine.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import com.gmao.backend.criticiteMachine.model.Criticite;

@Repository
public class CriticiteRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Criticite> findAll(){
        String sql="""
            SELECT 
                c.id_criticite_machine,
                c.criticite_machine
                c.description_criticite_machine
            FROM 
                CRITICITE c
        
            """;
        return jdbcTemplate.query(sql, (rs, rowNum) ->
            new Criticite(
                rs.getInt("id_criticite_machine"),
                rs.getString("criticite_machine"),
                rs.getString("description_criticite_machine")
            )
        );
    };


}

