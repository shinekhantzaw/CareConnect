using FWCommunityHub.Api.Models;
using FWCommunityHub.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace FWCommunityHub.Api.Controllers;

// Marks this class as an API controller with automatic request/response behavior.
[ApiController]
// Maps this controller to /api/resources (controller name without "Controller").
[Route("api/[controller]")]
public class ResourcesController : ControllerBase
{
    // Dependency injected service that provides resource data.
    private readonly IResourceService _resourceService;

    // Constructor injection: ASP.NET supplies IResourceService from DI container.
    public ResourcesController(IResourceService resourceService)
    {
        _resourceService = resourceService;
    }

    // Handles GET /api/resources and returns all available resources.
    [HttpGet]
    public ActionResult<IEnumerable<Resource>> GetResources()
    {
        var resources = _resourceService.GetResources();
        // Return HTTP 200 with JSON payload.
        return Ok(resources);
    }
}
