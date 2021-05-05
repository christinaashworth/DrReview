using System;
using System.ComponentModel.DataAnnotations;

namespace DrReview.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        public string FirebaseId { get; set; }

        [Required]
        public string Username { get; set; }

        public string City { get; set; }
        public string Email { get; set; }
        public string ProfilePhoto { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

    }
}