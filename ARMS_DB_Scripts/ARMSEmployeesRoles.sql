CREATE TABLE [ARMS].[ARMSEmployeesRoles](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY,
	[Name] [nvarchar](255) NOT NULL,
	[Active] [bit] NOT NULL,
	[IsSystemRole] [bit] NOT NULL,
	[SystemName] [nvarchar](max) NOT NULL,
	[DateCreated] [datetime] default (sysdatetime()) NOT NULL,
	[DateModified] [datetime]default (sysdatetime()) NOT NULL,
	[RoleOrder] [int] NULL,
 )
 Drop table ARMS.ARMSEmployeesRoles 

GO
INSERT [ARMS].[ARMSEmployeesRoles] ([Name], [Active], [IsSystemRole], [SystemName], [DateCreated], [DateModified], [RoleOrder]) VALUES (N'SuperUser', 1, 1, N'SuperUser', CAST(N'2015-07-28T11:01:14.837' AS DateTime), CAST(N'2015-07-28T11:01:14.837' AS DateTime), 1)
GO
INSERT [ARMS].[ARMSEmployeesRoles] ([Name], [Active], [IsSystemRole], [SystemName], [DateCreated], [DateModified], [RoleOrder]) VALUES (N'Admin', 1, 1, N'Admin', CAST(N'2015-07-28T11:01:14.837' AS DateTime), CAST(N'2015-09-28T11:01:14.837' AS DateTime), 2)
GO
INSERT [ARMS].[ARMSEmployeesRoles] ([Name], [Active], [IsSystemRole], [SystemName], [DateCreated], [DateModified], [RoleOrder]) VALUES (N'Employee', 1, 1, N'Employee', CAST(N'2015-07-28T11:01:14.837' AS DateTime), CAST(N'2015-10-28T11:01:14.837' AS DateTime), 3)
Select * from ARMS.ARMSEmployeesRoles

update ARMS.ARMSEmployeesRoles set Name='SuperUser' 

Select ARMS.ARMSEmployeesRoles.Name from ARMS.ARMSEmployeesRoles INNER JOIN ARMS.ARMSEmployee On ARMS.ARMSEmployeesRoles.SystemName=ARMS.ARMSEmployee.SystemName

Select * from ARMS.ARMSEmployeesRoles INNER JOIN ARMS.ARMSEmployee On ARMS.ARMSEmployeesRoles.SystemName=ARMS.ARMSEmployee.SystemName

