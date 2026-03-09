namespace FWCommunityHub.Api.Models;

// Represents one community resource record returned by the API.
public class Resource
{
    // Unique ID for this resource.
    public int Id { get; set; }
    // Display name shown in the UI.
    public string Name { get; set; } = string.Empty;
    // Short summary of what service is provided.
    public string Description { get; set; } = string.Empty;
    // High-level category such as Food, Housing, or Health.
    public string Category { get; set; } = string.Empty;
    // Physical location users can visit.
    public string Address { get; set; } = string.Empty;
    // Main phone contact.
    public string PhoneNumber { get; set; } = string.Empty;
    // Website URL for details or intake steps.
    public string Website { get; set; } = string.Empty;
    // Human-friendly business hours string.
    public string HoursOfOperation { get; set; } = string.Empty;
    // True when service is available 24/7.
    public bool Is24Hours { get; set; }
}
