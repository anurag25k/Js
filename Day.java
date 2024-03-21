import java.time.*;  // Import the LocalDateTime class
import java.time.format.DateTimeFormatter;  // Import the DateTimeFormatter class
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;
public class Day{
public static String findDay(int month, int day, int year) {
        
        Calendar calendar=Calendar.getInstance();
        calendar.set(year, month - 1, day);
        
        
        return calendar.getDisplayName(Calendar.DAY_OF_WEEK,Calendar.LONG, Locale.ENGLISH).toUpperCase();
        
    }
  public static void main(String[] args) {  
   System.out.println(findDay(3,21,2024));
  }  
}  
