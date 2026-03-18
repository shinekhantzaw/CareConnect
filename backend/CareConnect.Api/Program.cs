using CareConnect.Api.Services;

// Create the .NET app builder. This is where we register services and middleware.
var builder = WebApplication.CreateBuilder(args);

// Force the API to run on a fixed local port so the Angular app can call it reliably.
builder.WebHost.UseUrls("http://localhost:5000");

// Register MVC controllers (API endpoints).
builder.Services.AddControllers();
// Register metadata services used by Swagger/OpenAPI.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Allow the local Angular frontend to call this API during development.
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
// Register the resource service as a singleton so one shared instance is reused.
builder.Services.AddSingleton<IResourceService, ResourceService>();

// Build the app after service registration is complete.
var app = builder.Build();

// Enable Swagger only in development so API docs are available locally.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Apply the CORS policy before controller endpoints are executed.
app.UseCors("FrontendPolicy");
// Redirect HTTP to HTTPS when available.
app.UseHttpsRedirection();
// Map attribute-routed controllers like ResourcesController.
app.MapControllers();

// Start listening for incoming HTTP requests.
app.Run();
