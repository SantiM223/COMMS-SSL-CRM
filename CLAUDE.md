# Rappi CRM Tool - COMMS SSL

## Qué es este proyecto
App interna para el equipo de CRM de Rappi.
Gestiona comunicaciones push via Braze con un sistema
de franjas horarias y priorización por catálogo.

## Stack
- Next.js 14 App Router
- Tailwind CSS
- NextAuth.js con Okta (auth)
- PostgreSQL (CRUD de comunicaciones)
- Snowflake (dashboard, read-only)
- Google Sheets API (Deals de Trade)zl

## Módulos
1. Login con Okta → roles: Admin, CRM Analyst, Viewer
2. Dashboard → resultados de campañas desde Snowflake
3. Deals de Trade → deals disponibles desde Google Sheets
4. Comunicaciones → calendario semanal + priorizador de franjas
5. Config. Franjas → CRUD de franjas horarias

## Estructura de datos clave
- Franja: nombre, hora_inicio, max_pushes, color
- Push: país, squad, fecha_envío, franja, título, copy,
  deeplink, vertical, hora, brand_id, city_id, zone_id,
  microzone_id, pro
- Roles: Admin > CRM Analyst > Viewer

## Reglas de negocio
- Viewer no puede crear, editar ni eliminar
- Orden de prioridad en catálogo Braze: Pro > Microzona/Zona/Ciudad > Deals con brand id > Nacional
- Máximo recomendado: 5 franjas por día
- Cancelar un push en curso permite reemplazarlo con copy genérico
  manteniendo la misma audiencia y posición en el catálogo
- Un push manual puede crearse sin pasar por Deals de Trade
- Deals de Trade alimenta Comunicaciones pero son módulos separados

## Flujo principal
1. Trade sube deals al Google Sheets
2. Analista entra a Deals de Trade, selecciona deals
3. Click en "Programar seleccionados" → va a Comunicaciones con deals precargados
4. Analista asigna franja y ajusta campos
5. Push queda programado en el calendario
6. El catálogo de Braze se exporta con el orden de prioridad correcto

## Decisiones de arquitectura
- No mezclar datos de Snowflake con la DB operacional
- Credenciales siempre en .env.local, nunca en el código
- Deploy en Coolify con Docker

## Ramas
- main → código estable
- develop → integración
- feat/auth-okta → autenticación
- feat/dashboard → módulo de resultados
- feat/comunicaciones → calendario y priorizador
- feat/deals-trade → integración Google Sheets
- feat/franjas → configuración de franjas

## Lo que NO hacer
- No pushear directo a main
- No hardcodear credenciales
- No mezclar lógica de Snowflake con la DB operacional