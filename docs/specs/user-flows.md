# InsightFlow AI – User Flows

## 1. Dashboard Flow

### Goal
Allow users to quickly understand key metrics.

### Flow

1. User lands on dashboard
2. System loads KPIs and charts
3. User views metrics overview
4. User applies date filters
5. System updates charts dynamically

### States

- Loading → skeleton UI
- Success → charts displayed
- Empty → no data message
- Error → retry option

---

## 2. AI Chat Flow

### Goal
Enable users to interact with data using natural language.

### Flow

1. User opens chat panel
2. User types a question
3. User submits message
4. System sends request to AI service
5. AI processes request
6. Response is streamed back
7. UI displays response progressively

### States

- Idle
- Typing
- Thinking (AI processing)
- Streaming response
- Error handling

---

## 3. Insights Generation Flow

### Goal
Automatically generate insights from data.

### Flow

1. User clicks "Generate Insights"
2. System gathers current dashboard data
3. System sends data to AI service
4. AI analyzes trends
5. System displays insights in natural language

### States

- Loading insights
- Success
- Error

---

## 4. Navigation Flow

### Goal
Ensure smooth navigation across features.

### Flow

1. User navigates between dashboard and chat
2. State is preserved (filters, messages)
3. UI transitions smoothly

---

## UX Considerations

- Fast feedback for every action
- Clear system states
- Smooth transitions
- Minimal cognitive load