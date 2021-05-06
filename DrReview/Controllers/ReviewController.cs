using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using DrReview.Models;
using DrReview.Repositories;

namespace DrReview.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;
        public ReviewController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        [HttpGet("GetReviewsByDoctor/{id}")]
        public IActionResult GetReviewsByDoctor(int id)
        {
            var review = _reviewRepository.GetReviewsByDoctor(id);

            return Ok(review);
        }

        [HttpGet("GetReviewsByUser/{id}")]
        public IActionResult GetReviewsByUser(int id)
        {
            var review = _reviewRepository.GetReviewsByUser(id);

            return Ok(review);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var review = _reviewRepository.GetReviewById(id);

            return Ok(review);
        }

        [HttpPost]
        public IActionResult Post(Review review)
        {
            review.CreateDateTime = DateTime.Now;
            _reviewRepository.AddReview(review);
            return CreatedAtAction("Get", new { id = review.Id }, review);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Review review)
        {
            _reviewRepository.EditReview(review);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _reviewRepository.DeleteReview(id);
            return NoContent();
        }
    }
}
