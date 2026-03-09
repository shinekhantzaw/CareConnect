
using FWCommunityHub.Api.Models;

namespace FWCommunityHub.Api.Services;

// Simple in-memory service used for demo data (no database yet).
public class ResourceService : IResourceService
{
    // Seed data returned by the API so the frontend has content to render.
    private static readonly List<Resource> SampleResources =
    [
        new()
        {
            Id = 1,
            Name = "Community Wellness Center",
            Description = "Free and low-cost mental health support services.",
            Category = "Health",
            Address = "123 Main St, Indianapolis, IN",
            PhoneNumber = "(317) 555-0101",
            Website = "https://example.org/wellness",
            HoursOfOperation = "Mon-Fri 8:00 AM - 6:00 PM",
            Is24Hours = false
        },
        new()
        {
            Id = 2,
            Name = "Safe Shelter",
            Description = "Emergency overnight shelter and support.",
            Category = "Housing",
            Address = "450 Hope Ave, Indianapolis, IN",
            PhoneNumber = "(317) 555-0125",
            Website = "https://example.org/safe-shelter",
            HoursOfOperation = "Open 24 hours",
            Is24Hours = true
        },
        new()
        {
            Id = 3,
            Name = "Neighborhood Food Pantry",
            Description = "Weekly food distribution for local families.",
            Category = "Food",
            Address = "78 Elm Rd, Indianapolis, IN",
            PhoneNumber = "(317) 555-0199",
            Website = "https://example.org/pantry",
            HoursOfOperation = "Tue/Thu 10:00 AM - 2:00 PM",
            Is24Hours = false
        }
    ];

    // Read-only access method used by the controller.
    public IEnumerable<Resource> GetResources()
    {
        return SampleResources;
    }
}
