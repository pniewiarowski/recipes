namespace API.DTOs;

public class Error(string message)
{
    public string Message { get; set; } = message;
}