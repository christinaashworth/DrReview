using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrReview.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public int DoctorId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreateDateTime { get; set; }
    }
}
