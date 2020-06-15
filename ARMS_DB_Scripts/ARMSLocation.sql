IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name='ARMS')
BEGIN
EXEC('CREATE SCHEMA ARMS')
END
IF OBJECT_ID('ARMS.ARMSLocation') IS NULL
BEGIN
	CREATE TABLE ARMS.ARMSLocation(
	[LocationId] int primary key not null,
	[LocationName] varchar(255) not null
)
END
 Drop table ARMS.ARMSLocation
GO
INSERT [ARMS].[ARMSLocation] ([LocationId], [LocationName]) VALUES (1, 'Dallas')
GO
INSERT [ARMS].[ARMSLocation] ([LocationId], [LocationName]) VALUES (2, 'Noida')

Select * from ARMS.ARMSLocation
