/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bd;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Brandon Martinez Hernandez
 */
public class metodos_sql {
    public static ConexionBD conexion = new ConexionBD();
    public static ResultSet rs;
    
    public static boolean entrar(String nombre, String pass)
    {
        Connection conexion = null;
        try
        {
            Statement sentencia = conexion.createStatement();
            String st = ("SELECT password FROM usuarios WHERE user = \'" + nombre + "\';");
            rs = sentencia.executeQuery(st);
            String passB;
            if(rs.next())
            {
                passB = rs.getString("password");
                if(passB.equals(pass))
                {
                    return true;
                }
            }
            
            conexion.close();
        }
        catch (SQLException e)
        {
            System.out.println(e);
        }
        return false;
    }
}
