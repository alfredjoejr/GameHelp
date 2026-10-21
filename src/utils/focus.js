export function keepFocus(render) {
  const active = document.activeElement;
  const id = active && active.id;
  const isText = active && active.tagName === 'INPUT' && active.type === 'text';
  const start = isText ? active.selectionStart : null;
  const end = isText ? active.selectionEnd : null;

  render();

  if (!id) return;
  const next = document.getElementById(id);
  if (!next || next === document.activeElement) return;

  next.focus({ preventScroll: true });
  if (start !== null && next.setSelectionRange) {
    next.setSelectionRange(start, end);
  }
}
