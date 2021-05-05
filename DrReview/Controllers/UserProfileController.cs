using System;
using Microsoft.AspNetCore.Mvc;
using DrReview.Repositories;
using DrReview.Models;

namespace DrReview.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet("{firebaseId}")]
        public IActionResult GetUserProfile(string firebaseId)
        {
            var profile = _userProfileRepository.GetByFirebaseId(firebaseId);
            return Ok(profile);
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            userProfile.DateCreated = DateTime.Now;
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetUserProfile),
                new { firebaseId = userProfile.FirebaseId },
                userProfile);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var profiles = _userProfileRepository.GetUserProfiles();
            return Ok(profiles);
        }

        [HttpGet("GetUserProfileById/{id}")]
        public IActionResult GetUserProfileById(int id)
        {
            return Ok(_userProfileRepository.GetUserProfileById(id));
        }

    }
}