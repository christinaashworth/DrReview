using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrReview.Models
{
    public class Doctor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PracticeArea { get; set; }
        public string Location { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string Notes { get; set; }
    }
}
