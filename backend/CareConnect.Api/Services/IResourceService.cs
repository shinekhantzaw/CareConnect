using CareConnect.Api.Models;

namespace CareConnect.Api.Services;

// Service contract for retrieving community resources.
public interface IResourceService
{
    // Returns all resources currently available to the application.
    IEnumerable<Resource> GetResources();
}
