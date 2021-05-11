using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using DrReview.Models;
using DrReview.Repositories;

namespace DrReview.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorRepository _doctorRepository;
        public DoctorController(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_doctorRepository.GetDoctors());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var doctor = _doctorRepository.GetDoctorById(id);
            if (doctor == null)
            {
                return NotFound();
            }

            return Ok(doctor);
        }

        [HttpGet("search")]
        public IActionResult Search(string q)
        {
            return Ok(_doctorRepository.Search(q));
        }
    }
}
