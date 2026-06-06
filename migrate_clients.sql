-- Migracao: adiciona campos NF-e na tabela rp_clients
-- Execute no Supabase SQL Editor: https://supabase.com/dashboard/project/zuwdgyvbuaocbzckhhlm/sql/new
-- Rode UMA vez apenas.

ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS cpf_cnpj     TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS email         TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS cep           TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS logradouro    TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS nro           TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS complemento   TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS bairro        TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS municipio     TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS uf            TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS codigo_ibge   TEXT;
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS ind_ie_dest   TEXT DEFAULT '9';
ALTER TABLE rp_clients ADD COLUMN IF NOT EXISTS ie            TEXT;
