USE [master]
GO
IF db_id('DrReview') IS NULL
  CREATE DATABASE [DrReview]
GO
USE [DrReview]
GO

DROP TABLE IF EXISTS [Doctor];
DROP TABLE IF EXISTS [Review];
DROP TABLE IF EXISTS [SpecialConsideration];
DROP TABLE IF EXISTS [DoctorSpecialConsideration];
DROP TABLE IF EXISTS [UserProfile];

CREATE TABLE [Doctor] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [PracticeArea] nvarchar(255) NOT NULL,
  [Location] nvarchar(255) NOT NULL,
  [Gender] nvarchar(255) NOT NULL,
  [Phone] int NOT NULL,
  [Email] nvarchar(255) NOT NULL, 
  [Website] nvarchar(255),
  [Notes] nvarchar(255)
)
GO

CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [FirebaseId] integer NOT NULL,
  [Username] nvarchar(255) NOT NULL,
  [City] nvarchar(255),
  [Email] nvarchar(255) NOT NULL,
  [ProfilePhoto] nvarchar(255),
  [DateCreated] datetime NOT NULL
)
GO

CREATE TABLE [Review] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [UserProfileId] integer NOT NULL,
  [DoctorId] integer NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [Content] nvarchar NOT NULL,
  [CreateDateTime] datetime NOT NULL
)
GO

CREATE TABLE [SpecialConsideration] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [DoctorSpecialConsideration] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [SpecialConsiderationId] integer NOT NULL,
  [DoctorId] integer NOT NULL,
  [ReviewId] integer NOT NULL
)
GO

ALTER TABLE [Review] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO
ALTER TABLE [Review] ADD FOREIGN KEY ([DoctorId]) REFERENCES [Doctor] ([Id])
GO
ALTER TABLE [DoctorSpecialConsideration] ADD FOREIGN KEY ([SpecialConsiderationId]) REFERENCES [SpecialConsideration] ([Id])
GO
ALTER TABLE [DoctorSpecialConsideration] ADD FOREIGN KEY ([DoctorId]) REFERENCES [Doctor] ([Id])
GO
ALTER TABLE [DoctorSpecialConsideration] ADD FOREIGN KEY ([ReviewId]) REFERENCES [Review] ([Id])
GO