-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Dez-2024 às 17:02
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_adote_um_novo_amor`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbadotante`
--

CREATE TABLE `tbadotante` (
  `id_adotante` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `genero` varchar(20) NOT NULL,
  `data_nascimento` varchar(20) NOT NULL,
  `contato` varchar(30) NOT NULL,
  `renda` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tbadotante`
--

INSERT INTO `tbadotante` (`id_adotante`, `nome`, `cpf`, `genero`, `data_nascimento`, `contato`, `renda`) VALUES
(1, '', '111.111.111-11', 'Feminino', '05/05/2005', '(84) 99999-9999', 2000),
(2, 'Daniel', '333.333.333-33', 'Masculino', '2024-11-18', '99999-9999', 2000),
(3, 'Mariana', '12345678969', 'Feminino', '2005-08-13', '84 99562436', 12600),
(4, 'Nara Luiza', '12345236447', 'Feminino', '2004-01-09', '84 99545687', 1800),
(5, 'Hellen Tarsilla', '9876543214', 'Feminino', '2005-05-13', '84 3654789', 1900);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbanimal`
--

CREATE TABLE `tbanimal` (
  `id_animal` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `raca` varchar(100) NOT NULL,
  `peso` int(11) NOT NULL,
  `altura` int(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `id_adotante` int(11) DEFAULT NULL,
  `idade` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tbanimal`
--

INSERT INTO `tbanimal` (`id_animal`, `nome`, `raca`, `peso`, `altura`, `status`, `descricao`, `id_adotante`, `idade`) VALUES
(1, 'Tobby', 'Cachorro corguie', 3, 40, 'Adotado', 'Cachorro preto', 1, NULL),
(2, 'Doguinho', 'Cachorro', 3, 9, 'Adotado', 'Pequeno', 1, '2024-10-28'),
(3, 'Floquinho', 'Coelho', 3, 60, 'Disponível', 'Floquinho é um animal muito fofo, porém não tem uma patinha traseira. ', NULL, '2024-02-29'),
(7, 'Juju', 'Gata', 3, 60, 'Adotado', 'Juju é uma gatinha muito esperta, adora brincar e gosta de bolinhas amarelas. ', 2, '2023-03-30'),
(8, 'Pérola', 'Gata', 3, 60, 'Disponível', 'Pérola é uma gatinha de cor mesclada com olhos claros.', NULL, '2022-09-08'),
(9, 'Popi', 'cachorra', 2, 60, 'Disponível', 'Popi é uma cachorra de pelo branquinho e com olhos claros.', NULL, '2023-02-24'),
(10, 'tutu', 'coelho ', 2, 50, 'Disponível', 'Tutu é um coelho de pelos escuros e manchinhas brancas.', NULL, '2023-02-19'),
(11, 'Tito', 'cachorro', 2, 60, 'Disponível', 'Tito é um cachorro de pelos escuros e manchinhas brancas.', NULL, '2023-02-03'),
(12, 'Toto', 'Coleho', 2, 30, 'Disponível', 'Toto é um coelho de pelos escuros, e infelizmente perdeu sua orelha em um acidente. ', NULL, '2021-12-17'),
(16, 'Boby', 'Cachorro', 5, 60, 'Disponível', 'Boby é um buldogue que não possui uma pata traseira, porém é muito esperto. ', NULL, '2022-01-13'),
(17, 'Lili', 'Gata', 3, 50, 'Disponível', 'Lili é uma gata muito esperta de pelos escuros e olhos claros. ', NULL, '2020-03-08'),
(18, 'Lulu', 'Coelha', 4, 60, 'Disponível', 'Lulu é uma coelhinha muito esperta de olhos escuros e pelos escuros. ', NULL, '2022-06-09'),
(19, 'Rodolfo', 'Gato', 3, 50, 'Disponível', ' Rodolfo é um gato muito esperto, tem olhos escuros e pelos escuros. ', NULL, '2022-06-25'),
(20, 'Roby', 'Coelho', 4, 65, 'Disponível', ' Roby é um coelho muito esperto, tem olhos claros e pelos escuros. ', NULL, '2021-12-01'),
(23, 'Monkey Joe', 'Esquilo', 1, 10, 'Disponível', 'Muito pequeno', NULL, '2024-12-04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbanimalanomalia`
--

CREATE TABLE `tbanimalanomalia` (
  `idAnimalAnomalia` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `id_anomalia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tbanimalanomalia`
--

INSERT INTO `tbanimalanomalia` (`idAnimalAnomalia`, `id_animal`, `id_anomalia`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbanomalias`
--

CREATE TABLE `tbanomalias` (
  `id_anomalia` int(11) NOT NULL,
  `anomalia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tbanomalias`
--

INSERT INTO `tbanomalias` (`id_anomalia`, `anomalia`) VALUES
(1, 'Sem Anomalia'),
(2, 'Pulga'),
(3, 'Calazar'),
(4, 'Artrite'),
(5, 'Hipertiroidismo'),
(6, 'Distrofia muscular'),
(7, 'Leucemia felina'),
(8, 'FIV (Vírus da Imunodeficiência Felina)'),
(9, 'Hipoglicemia'),
(10, 'Câncer'),
(11, 'Carrapato'),
(12, 'Dermatite alérgica'),
(13, 'Raiva'),
(14, 'Infecção urinária'),
(15, 'Alergias alimentares');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbadotante`
--
ALTER TABLE `tbadotante`
  ADD PRIMARY KEY (`id_adotante`),
  ADD UNIQUE KEY `id_adotante` (`id_adotante`);

--
-- Índices para tabela `tbanimal`
--
ALTER TABLE `tbanimal`
  ADD PRIMARY KEY (`id_animal`),
  ADD KEY `TbAdotante_fk0` (`id_adotante`);

--
-- Índices para tabela `tbanimalanomalia`
--
ALTER TABLE `tbanimalanomalia`
  ADD PRIMARY KEY (`idAnimalAnomalia`),
  ADD UNIQUE KEY `idAnimalAnomalia` (`idAnimalAnomalia`);

--
-- Índices para tabela `tbanomalias`
--
ALTER TABLE `tbanomalias`
  ADD PRIMARY KEY (`id_anomalia`),
  ADD UNIQUE KEY `id_anomalia` (`id_anomalia`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbadotante`
--
ALTER TABLE `tbadotante`
  MODIFY `id_adotante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tbanimal`
--
ALTER TABLE `tbanimal`
  MODIFY `id_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `tbanimalanomalia`
--
ALTER TABLE `tbanimalanomalia`
  MODIFY `idAnimalAnomalia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tbanomalias`
--
ALTER TABLE `tbanomalias`
  MODIFY `id_anomalia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tbanimal`
--
ALTER TABLE `tbanimal`
  ADD CONSTRAINT `TbAdotante_fk0` FOREIGN KEY (`id_adotante`) REFERENCES `tbadotante` (`id_adotante`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
