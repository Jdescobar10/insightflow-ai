# InsightFlow AI – Requirements

## 1. Dashboard Requirements

### Functional

- The system must display KPIs (revenue, users, conversions)
- The system must render charts (line, bar)
- The system must allow filtering by date range
- The system must update data dynamically when filters change

### Validation

- Date range must be valid (start < end)
- Data must exist before rendering charts

### Error Handling

- If data fails to load, show retry option
- If no data, show empty state message

---

## 2. AI Chat Requirements

### Functional

- User must be able to send messages
- System must send message to AI service
- System must display response
- System must support streaming responses

### Validation

- Input must not be empty
- Input must have a max length

### States

- Idle
- Typing
- Thinking (loading)
- Streaming
- Error

### Error Handling

- Show error message if AI fails
- Allow retry

---

## 3. Insights Requirements

### Functional

- User must be able to trigger insights generation
- System must analyze current data
- System must display insights in natural language

### Validation

- Data must be available before generating insights

### Error Handling

- Show fallback message if generation fails

---

## 4. Performance Requirements

- Charts must render under 1s
- UI must remain responsive during API calls
- Use lazy loading for heavy components

---

## 5. UX Requirements

- System must provide visual feedback for all actions
- Loading states must be visible
- Transitions must be smooth

---

## 6. Technical Constraints

- Must use React + Next.js
- Must use TypeScript
- Must use React Query for async state
- Must separate UI, logic, and services