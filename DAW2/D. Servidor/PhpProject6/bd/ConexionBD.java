/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bd;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author martin
 */
public class ConexionBD {
    /*public static java.sql.Connection mySQL(String baseDatos, String username, String password) {
        java.sql.Connection con = null;
        try {
            // 1.1) Cargamos el driver JDBC que vayamos a usar
            //Class.forName("com.mysql.jdbc.Driver");
            Class.forName("com.mysql.cj.jdbc.Driver");
            // 1.2) Establecemos una conexión con nuestra base de datos
            //El objeto Properties hace que salgan tildes y eñes, también podemos añadir el usuario y contraseña
            java.util.Properties props = new java.util.Properties();
            props.put("charSet", "iso-8859-1");
            props.put("user", username);
            props.put("password", password);
            //conectamos con la base de datos
            String url = "jdbc:mysql://localhost:3306/" + baseDatos;
            con = (java.sql.Connection) java.sql.DriverManager.getConnection(url, props);
            return con;
        } catch (java.sql.SQLException e) {
            System.out.println("SQL Exception: " + e.toString());
            return null;
        } catch (ClassNotFoundException e) {
            System.out.println("Class Not Found Exception: "
                    + e.toString());
            return null;
        }
}*/
    
    public static String url = "jdbc:mysql://localhost/biblioteca";
    public static String usuario = "root";
    public static String contraseña = "";
    public static String clase = "com.mysql.jdbc.Driver";
    public static Connection conectar()
    {
        Connection conexion = null;
        
        try
        {
            Class.forName(clase);
            conexion = DriverManager.getConnection(url, usuario, contraseña);
            System.out.println("Conexion establecida con exito!");
        }
        catch (ClassNotFoundException | SQLException e)
        {
            System.out.println((e));
        }
        return conexion;
    }
}
