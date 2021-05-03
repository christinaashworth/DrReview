USE [DrReview]
GO

SET IDENTITY_INSERT [Doctor] ON
INSERT INTO [Doctor]
  ([Id], [Name], [PracticeArea], [Location], [Gender], [Phone], [Email])
VALUES 
  (1, 'Garry Juliana', 'Family Medicine', 'Nashville', 'Man', '615-555-0129', 'juliana@doctor.com'),
  (2, 'Oma Stockfisch', 'OBGYN', 'Nashville', 'Woman', '615-555-0100', 'stockfisch@doctor.com'),
  (3, 'Ignacio Palmerino', 'Gastroenterology', 'Nashville', 'Man', '615-555-0189', 'palmerino@doctor.com'),
  (4, 'Melba Slaten', 'Family Medicine', 'Nashville', 'Woman', '615-555-0173', 'slaten@doctor.com'),
  (5, 'Young Klinker', 'Endocrinology', 'Nashville', 'Man', '615-555-0166', 'klinker@doctor.com'),
  (6, 'Kelly Haaby', 'Gynecology', 'Nashville', 'Woman', '615-555-0198', 'haaby@doctor.com'),
  (7, 'Marty Schwadron', 'Pediatrics', 'Nashville', 'Man', '615-555-0122', 'schwadron@doctor.com'),
  (8, 'Isreal Hayden', 'ENT', 'Nashville', 'Man', '615-555-0132', 'hayden@doctor.com'),
  (9, 'Kristen Pocius', 'Dermatology', 'Nashville', 'Woman', '615-555-0165', 'pocius@doctor.com'),
  (10, 'Mohamed Aspley', 'Internal Medicine', 'Nashville', 'Man', '615-555-0133', 'aspley@doctor.com'),
  (11, 'Laurence Slawter', 'OBGYN', 'Nashville', 'Man', '615-555-0137', 'slawter@doctor.com'),
  (12, 'Jacqui Kniffen', 'Family Medicine', 'Nashville', 'Woman', '615-555-0131', 'kniffen@doctor.com'),
  (13, 'Macy Knispel', 'Gastroenterology', 'Nashville', 'Woman', '615-555-0187', 'knispel@doctor.com'),
  (14, 'Brittny Tarling', 'Endocrinology', 'Nashville', 'Woman', '615-555-0177', 'tarling@doctor.com'),
  (15, 'Monica Damis', 'Pediatrics', 'Nashville', 'Woman', '615-555-0155', 'damis@doctor.com'),
  (16, 'Faustina Mayeski', 'Family Medicine', 'Nashville', 'Woman', '615-555-0146', 'mayeski@doctor.com'),
  (17, 'Anthony Rydeen', 'Pediatrics', 'Nashville', 'Man', '615-555-0116', 'rydeen@doctor.com'),
  (18, 'Mack Sudbeck', 'Internal Medicine', 'Nashville', 'Man', '615-555-0175', 'sudbeck@doctor.com'),
  (19, 'Hobert Pumper', 'Family Medicine', 'Nashville', 'Man', '615-555-0123', 'pumper@doctor.com'),
  (20, 'Carmen Croslin', 'Pediatrics', 'Nashville', 'Woman', '615-555-0134', 'croslin@doctor.com'),
  (21, 'Eugene Voyles', 'Gastroenterology', 'Nashville', 'Man', '615-555-0154', 'voyles@doctor.com'),
  (22, 'Josefa Schwetz', 'Dermatology', 'Nashville', 'Woman', '615-555-0162', 'schwetz@doctor.com'),
  (23, 'Teddy Darner', 'Family Medicine', 'Nashville', 'Man', '615-555-0123', 'darner@doctor.com'),
  (24, 'Dong Klenovich', 'Family Medicine', 'Nashville', 'Man', '615-555-0176', 'klenovich@doctor.com'),
  (25, 'Jamaal Levandowski', 'Endocrinology', 'Nashville', 'Man', '615-555-0168', 'levandowski@doctor.com'),
  (26, 'Love Rappenecker', 'OBGYN', 'Chicago', 'Woman', '312-555-0701', 'rappenecker@doctor.com'),
  (27, 'Kimberli Verner', 'ENT', 'Chicago', 'Woman', '312-555-0850', 'verner@doctor.com'),
  (28, 'Laverne Lipsky', 'Family Medicine', 'Chicago', 'Woman', '312-555-0255', 'lipsky@doctor.com'),
  (29, 'Loretta Lemon', 'Family Medicine', 'Chicago', 'Woman', '312-555-0963', 'lemon@doctor.com'),
  (30, 'Shante Bernsen', 'OBGYN', 'Chicago', 'Man', '312-555-0437', 'bernsen@doctor.com'),
  (31, 'Andra Duross', 'Gynecology', 'Chicago', 'Woman', '312-555-0706', 'duross@doctor.com'),
  (32, 'Dana Moorer', 'Gynecology', 'Chicago', 'Woman', '312-555-0699', 'moorer@doctor.com'),
  (33, 'Nicole Serasio', 'ENT', 'Chicago', 'Woman', '312-555-0595', 'serasio@doctor.com'),
  (34, 'Julianne Libera', 'Gynecology', 'Chicago', 'Woman', '312-555-0008', 'libera@doctor.com'),
  (35, 'Micki Minshew', 'Family Medicine', 'Chicago', 'Woman', '312-555-0608', 'minshew@doctor.com'),
  (36, 'Timmy Sirignano', 'Pediatrics', 'Chicago', 'Man', '312-555-0256', 'sirignano@doctor.com'),
  (37, 'Federico Derden', 'Gastroenterology', 'Chicago', 'Man', '312-555-0231', 'derden@doctor.com'),
  (38, 'Quinton Micklos', 'Dermatology', 'Chicago', 'Man', '312-555-0524', 'micklos@doctor.com'),
  (39, 'Floria Benavides', 'Gynecology', 'Chicago', 'Woman', '312-555-0200', 'benavides@doctor.com'),
  (40, 'Woodrow Puri', 'Endocrinology', 'Chicago', 'Man', '312-555-0330', 'puri@doctor.com'),
  (41, 'Jeffery Schopp', 'Family Medicine', 'Chicago', 'Man', '312-555-0330', 'schopp@doctor.com'),
  (42, 'Lemuel Tepp', 'Dermatology', 'Chicago', 'Man', '312-555-0540', 'tepp@doctor.com'),
  (43, 'Ada Stern', 'OBGYN', 'Chicago', 'Woman', '312-555-0092', 'stern@doctor.com'),
  (44, 'Trudy Pere', 'Family Medicine', 'Chicago', 'Woman', '312-555-0966', 'pere@doctor.com'),
  (45, 'Wilbur Bernal', 'Gastroenterology', 'Chicago', 'Man', '312-555-0474', 'bernal@doctor.com'),
  (46, 'Kathie Anchondo', 'Gynecology', 'Chicago', 'Woman', '312-555-0003', 'anchondo@doctor.com'),
  (47, 'Jazmin Huskinson', 'ENT', 'Chicago', 'Woman', '312-555-0157', 'huskinson@doctor.com'),
  (48, 'Betty Venturino', 'Dermatology', 'Chicago', 'Woman', '312-555-0859', 'venturino@doctor.com'), 
  (49, 'Rupert Spicer', 'Pediatrics', 'Chicago', 'Man', '312-555-0411', 'spicer@doctor.com'),
  (50, 'Aileen Cotto', 'OBGYN', 'Chicago', 'Woman', '312-555-0839', 'cotto@doctor.com');
 SET IDENTITY_INSERT [Doctor] OFF

SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
  ([Id], [FirebaseId], [Username], [City], [Email], [ProfilePhoto], [DateCreated])
VALUES 
  (1, 'A578gIbXNkY6XTFepQJsnbqMi7T2', 'aardshark73', 'Nashville', 'aa@user.com', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Arthur_Read.svg/800px-Arthur_Read.svg.png', '04-20-2020'),
  (2, 'UyDyQTbTWAVglYjt6LP8z26BaKf1', 'bbgirl112', 'Nashville', 'bb@user.com', 'https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png', '03-09-2017'),
  (3, 'KJmWWlnS5sUg9oFzpI7bppWULrq2', 'cubsrcool', 'Chicago', 'cc@user.com', 'https://www.irishtimes.com/polopoly_fs/1.2853149.1478154856!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg', '12-20-2018'),
  (4, '5SsvXkrmHsh0lw2tMJ0zOPIoNWb2', 'notdonaldduck', 'Chicago', 'dd@user.com', null, '01-01-2019'),
  (5, 'BKeNyChLm4WahARjp98JEcj2T5H2', 'eeyoreisthebest', 'Chicago', 'ee@user.com', null, '03-03-2016');
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Review] ON
INSERT INTO [Review]
([Id], [UserProfileId], [DoctorId], [Title], [Content], [CreateDateTime])
VALUES
(1, 1, 1, 'Great experience.', 'I have severe anxiety, and Dr. Garry was incredibly patient with me as I asked a lot of questions. His staff was also very helpful with rescheduling appointments when my mild agoraphobia really kicked in.', '04-25-2020');
SET IDENTITY_INSERT [Review] OFF

SET IDENTITY_INSERT [SpecialConsideration] ON
INSERT INTO [SpecialConsideration]
  ([Id], [Name])
VALUES
  (1, 'Mental Health or Neurodivergence'),
  (2, 'BIPOC'),
  (3, 'LGBTQ+ inclusive'),
  (4, 'Reproductive health'),
  (5, 'Body image/weight');

SET IDENTITY_INSERT [SpecialConsideration] OFF

SET IDENTITY_INSERT [DoctorSpecialConsideration] ON
INSERT INTO [DoctorSpecialConsideration]
([Id], [SpecialConsiderationId], [DoctorId], [ReviewId])
VALUES
(1, 1, 1, 1)
SET IDENTITY_INSERT [DoctorSpecialConsideration] OFF