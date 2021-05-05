using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrReview.Models
{
    public class DoctorSpecialConsideration
    {
        public int Id { get; set; }
        public int SpecialConsiderationId { get; set; }
        public int DoctorId { get; set; }
        public int ReviewId { get; set; }
    }
}
