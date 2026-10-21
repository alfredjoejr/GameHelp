const STORAGE_KEY = 'gamecodex_hogwarts_progress_v1';

const getInitialChecks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
};

const state = {
  view: 'showcase',
  selectedGameId: 'hogwarts-legacy',
  activeTab: 'overview',
  searchQuery: '',
  catalogCategory: 'all',
  collectibleRegionFilter: 'all',
  collectibleCategoryFilter: 'all',
  spellCategoryFilter: 'all',
  checkedItems: getInitialChecks(),
  activeModal: null
};

const listeners = new Set();

export const getState = () => state;

export const setState = (updates) => {
  Object.assign(state, updates);
  listeners.forEach(fn => fn(state));
};

export const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const toggleCheckItem = (id) => {
  const current = { ...state.checkedItems };
  if (current[id]) {
    delete current[id];
  } else {
    current[id] = true;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (e) {}
  setState({ checkedItems: current });
};

export const isItemChecked = (id) => {
  return Boolean(state.checkedItems[id]);
};

export const getCheckedCount = (totalItems) => {
  if (!totalItems || !totalItems.length) return { checked: 0, total: 0, percent: 0 };
  let count = 0;
  totalItems.forEach(item => {
    if (state.checkedItems[item.id]) {
      count++;
    }
  });
  const percent = Math.round((count / totalItems.length) * 100);
  return { checked: count, total: totalItems.length, percent };
};

export const openModal = (modalData) => {
  setState({ activeModal: modalData });
};

export const closeModal = () => {
  setState({ activeModal: null });
};
