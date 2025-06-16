USE DonateFaith;
GO

-- Inserir usuários (pastor, admin, tesoureiro, membro)
INSERT INTO Users (Name, FullName, CPF, Email, PasswordHash, Role, ChurchId, ChurchCode)
VALUES 
('João', 'João da Silva', '123.456.789-00', 'joao@igreja.com', 'hashsenha1', 1, NULL, NULL), -- Pastor
('Maria', 'Maria Oliveira', '987.654.321-00', 'maria@admin.com', 'hashsenha2', 2, NULL, NULL), -- Admin
('Carlos', 'Carlos Souza', '456.789.123-00', 'carlos@igreja.com', 'hashsenha3', NULL, NULL), -- Tesoureiro
('Ana', 'Ana Lima', '321.987.654-00', 'ana@membro.com', 'hashsenha4', NULL, NULL); -- Membro
GO

-- Inserir igreja com PastorId do primeiro usuário
INSERT INTO Churches (Name, Code, CNPJ, Address, Phone, FoundedDate, PastorId)
VALUES ('Igreja Esperança', 'IGESP01', '12.345.678/0001-00', 'Rua da Paz, 123', '(41) 99999-9999', '2010-05-10', 1);
GO

-- Atualizar usuários para terem ChurchId e ChurchCode
UPDATE Users
SET ChurchId = 1, ChurchCode = 'IGESP01'
WHERE Id IN (1,2,3,4);
GO

-- Inserir AdminChurch
INSERT INTO AdminChurches (AdminId, ChurchId)
VALUES (2, 1);
GO

-- Inserir transações
INSERT INTO Transactions (ChurchId, Type, Amount, TransactionDate, Description)
VALUES 
(1, 1, 500.00, GETDATE(), 'Oferta Culto Domingo'),
(1, 2, 300.00, GETDATE(), 'Compra de materiais');
GO

-- Inserir doações (ligadas à transação e usuário)
INSERT INTO Donations (ChurchId, Description, Name, DonorName, DonorEmail, GoalsAmount, Amount, PaymentMethod, DonationDate, TransactionId, UserId, ParentDonationId)
VALUES 
(1, 'Campanha Reforma', 'Reforma do Teto', 'José Pereira', 'jose@gmail.com', 1000.00, 200.00, 1, GETDATE(), 1, 4, NULL),
(1, 'Campanha Reforma', 'Reforma do Teto', 'Lucas Rocha', 'lucas@gmail.com', 1000.00, 150.00, 2, GETDATE(), 1, 4, 1);
GO

-- Inserir evento
INSERT INTO Events (ChurchId, Name, Date, EndDate, Location, Description, OrganizerId, MaxParticipants, IsRegistrationOpen)
VALUES 
(1, 'Retiro Espiritual', '2025-07-10', '2025-07-12', 'Chácara Esperança', 'Momento de comunhão e aprendizado', 2, 50, 1);
GO

-- Inserir relatório financeiro
INSERT INTO FinancialReports (ChurchId, TreasurerId, Period, InitialBalance, TotalIncome, TotalExpenses, FinalBalance, ReportFileUrl)
VALUES 
(1, 3, '2025-06-01', 1000.00, 500.00, 300.00, 1200.00, 'https://exemplo.com/relatorio-junho.pdf');
GO

-- Inserir post
INSERT INTO Posts (ChurchId, Title, Content, AuthorId, PublishedDate, ImageUrl)
VALUES 
(1, 'Culto de Domingo', 'Participe do nosso culto todos os domingos às 19h!', 1, GETDATE(), 'https://exemplo.com/imagem-culto.jpg');
GO

-- Inserir dízimos
INSERT INTO Tithes (UserId, MemberId, ChurchId, Amount, Date, TransactionId, TitheDate, TitheId)
VALUES 
(1, 4, 1, 150.00, GETDATE(), 2, '2025-06-10', NULL),
(1, 4, 1, 100.00, GETDATE(), 2, '2025-06-15', 1);
GO
