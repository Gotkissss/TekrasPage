// Shared submit logic for the contact-page design tests (contacto-a/b/c).
// Same behavior as the real contact page: ?servicio=<slug> preselects a service,
// at least one service is required, and the form posts to /api/contact.
export function initContactForm(form: HTMLFormElement) {
  const button = form.querySelector<HTMLButtonElement>('.submit')!;
  const status = form.querySelector<HTMLElement>('.status')!;
  const servicesError = form.querySelector<HTMLElement>('.services-error')!;
  const boxes = [...form.querySelectorAll<HTMLInputElement>('input[name="services"]')];
  const labels = button.querySelectorAll<HTMLElement>('[data-label]');
  const setLabel = (t: string) => labels.forEach((l) => (l.textContent = t));
  const msg: Record<string, string> = JSON.parse(form.dataset.messages!);

  const preset = new URLSearchParams(location.search).get('servicio');
  boxes.forEach((b) => (b.checked = b.value === preset));

  const servicesOk = () => {
    const ok = boxes.some((b) => b.checked);
    servicesError.hidden = ok;
    servicesError.textContent = ok ? '' : msg.servicesRequired;
    return ok;
  };
  boxes.forEach((b) => b.addEventListener('change', () => !servicesError.hidden && servicesOk()));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.classList.remove('error');
    if (!servicesOk()) {
      boxes[0].focus();
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    button.disabled = true;
    setLabel(msg.sending);
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || '');
      form.reset();
      setLabel(msg.sent);
      status.textContent = msg.success;
      form.dispatchEvent(new CustomEvent('sent'));
      setTimeout(() => setLabel(msg.submit), 4000);
    } catch (err) {
      setLabel(msg.submit);
      status.classList.add('error');
      status.textContent = [(err as Error).message, msg.fallback].filter(Boolean).join(' ');
    } finally {
      button.disabled = false;
    }
  });

  return { servicesOk };
}
