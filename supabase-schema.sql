-- À exécuter une fois dans Supabase > SQL Editor
create table if not exists public.ckm_docs (
  key text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.ckm_docs enable row level security;
drop policy if exists "ckm_anon_all" on public.ckm_docs;
create policy "ckm_anon_all" on public.ckm_docs for all to anon using (true) with check (true);
alter table public.ckm_docs replica identity full;
alter publication supabase_realtime add table public.ckm_docs;
