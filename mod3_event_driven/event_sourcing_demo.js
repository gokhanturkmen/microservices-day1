
// Minimal in-memory Event Store + replay demo
const store = new Map(); // streamId -> events[]

function append(streamId, event){
  if(!store.has(streamId)) store.set(streamId, []);
  store.get(streamId).push({ ...event, ts: Date.now() });
}

function load(streamId){
  return store.get(streamId) || [];
}

function applyEvent(state, event){
  switch(event.type){
    case 'OrderCreated':
      return { id:event.payload.id, lines:[] };
    case 'OrderLineAdded':
      return { ...state, lines:[...state.lines, { productId:event.payload.productId, qty:event.payload.qty }] };
    default:
      return state;
  }
}

function rebuild(streamId){
  const events = load(streamId);
  return events.reduce(applyEvent, {});
}

// Demo
append('Order-1', { type:'OrderCreated', payload:{ id:'Order-1' } });
append('Order-1', { type:'OrderLineAdded', payload:{ productId:'p-1', qty:2 } });
append('Order-1', { type:'OrderLineAdded', payload:{ productId:'p-2', qty:1 } });

console.log('Rebuilt state:', rebuild('Order-1'));
