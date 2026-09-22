// Data Initialization
let medicines = JSON.parse(localStorage.getItem('medicines')) || [
    { id: 1, name: 'Amoxicillin 500mg', price: 12.00, fav: false },
    { id: 2, name: 'Biogesic 500mg', price: 5.50, fav: false },
    { id: 3, name: 'Cetirizine 10mg', price: 11.00, fav: false },
    { id: 4, name: 'Kremil-S', price: 6.00, fav: false },
    { id: 5, name: 'Loperamide 2mg', price: 9.00, fav: false },
    { id: 6, name: 'Neozep Forte', price: 8.50, fav: false },
    { id: 7, name: 'Strepsils', price: 15.00, fav: false },
    { id: 8, name: 'Vitamin C 500mg', price: 10.00, fav: false }
];

let cart = [];
let selectedMed = null;
let selectedQty = 0;
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Save initial data if empty
if (!localStorage.getItem('medicines')) {
    localStorage.setItem('medicines', JSON.stringify(medicines));
}

// --- Core Functions ---

function checkOrientation() {
    const warning = document.getElementById('orientationWarning');
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;
    if (isMobile && isPortrait) {
        warning.classList.add('show');
    } else {
        warning.classList.remove('show');
    }
}

function toggleFavorite(id, event) {
    event.stopPropagation(); // Prevent selecting the med when clicking fav
    const med = medicines.find(m => m.id === id);
    if (med) {
        med.fav = !med.fav;
        localStorage.setItem('medicines', JSON.stringify(medicines));
        renderMeds();
    }
}

function getSortedMeds() {
    // Sort: Favorites first, then Alphabetical
    return [...medicines].sort((a, b) => {
        if (a.fav === b.fav) {
            return a.name.localeCompare(b.name);
        }
        return b.fav ? -1 : 1;
    });
}

function renderMeds() {
    const grid = document.getElementById('medsGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    grid.innerHTML = '';

    const sortedMeds = getSortedMeds();

    sortedMeds.filter(m => m.name.toLowerCase().includes(search)).forEach(med => {
        const btn = document.createElement('div');
        btn.className = 'med-btn' + (selectedMed && selectedMed.id === med.id ? ' active' : '');
        
        const favIcon = med.fav ? '★' : '☆';
        const favClass = med.fav ? 'active' : '';

        btn.innerHTML = `
            <div class="med-fav-icon ${favClass}" onclick="toggleFavorite(${med.id}, event)">${favIcon}</div>
            <div class="med-name">${med.name}</div>
            <div class="med-price">₱${med.price.toFixed(2)}</div>
        `;
        btn.onclick = () => selectMed(med);
        grid.appendChild(btn);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cartItems');
    const totalDiv = document.getElementById('totalAmount');
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<div class="placeholder-text" style="margin-top:20px;">Cart is empty</div>';
        totalDiv.innerText = '₱0.00';
        return;
    }

    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <div class="cart-item-name" style="font-weight:bold;">${item.name}</div>
                <div class="cart-item-qty" style="color:#666; font-size:12px;">${item.qty} x ₱${item.price.toFixed(2)}</div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <div class="cart-item-total" style="font-weight:bold;">₱${itemTotal.toFixed(2)}</div>
                <span style="color:red; cursor:pointer; font-weight:bold;" onclick="removeFromCart(${index})">✕</span>
            </div>
        `;
        cartDiv.appendChild(div);
    });

    totalDiv.innerText = `₱${total.toFixed(2)}`;
}

function selectMed(med) {
    selectedMed = med;
    selectedQty = 0;
    updateSelectedUI();
    renderMeds();
}

function updateSelectedUI() {
    const infoDiv = document.getElementById('selectedInfo');
    const controlsDiv = document.getElementById('qtyControls');
    const qtyInput = document.getElementById('qtyInput');

    if (!selectedMed) {
        infoDiv.innerHTML = '<div class="placeholder-text">Select a medicine</div>';
        controlsDiv.style.display = 'none';
        return;
    }

    infoDiv.innerHTML = `
        <div style="font-weight:bold; font-size:16px;">${selectedMed.name}</div>
        <div style="color:#4b5563; margin-top:5px;">Price: ₱${selectedMed.price.toFixed(2)}</div>
    `;
    
    controlsDiv.style.display = 'flex';
    qtyInput.value = selectedQty;
}

function adjustQty(change) {
    if (!selectedMed) return;
    selectedQty += change;
    if (selectedQty < 0) selectedQty = 0;
    document.getElementById('qtyInput').value = selectedQty;
}

function manualQtyChange(val) {
    if (!selectedMed) return;
    let num = parseInt(val);
    if (isNaN(num) || num < 0) num = 0;
    selectedQty = num;
}

function focusQtyInput() {
    if (!selectedMed) {
        alert('Please select a medicine first!');
        return;
    }
    document.getElementById('qtyInput').focus();
    document.getElementById('qtyInput').select();
}

function setQty(qty) {
    if (!selectedMed) {
        alert('Please select a medicine first!');
        return;
    }
    selectedQty = qty;
    document.getElementById('qtyInput').value = selectedQty;
}

function addToCart() {
    if (!selectedMed || selectedQty === 0) {
        alert('Please select a medicine and quantity!');
        return;
    }

    const existing = cart.find(c => c.id === selectedMed.id);
    if (existing) {
        existing.qty += selectedQty;
    } else {
        cart.push({ 
            id: selectedMed.id, 
            name: selectedMed.name, 
            price: selectedMed.price, 
            qty: selectedQty 
        });
    }

    selectedMed = null;
    selectedQty = 0;
    updateSelectedUI();
    renderMeds();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function clearSelection() {
    selectedMed = null;
    selectedQty = 0;
    updateSelectedUI();
    renderMeds();
}

function checkout() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    
    if(!confirm(`Confirm transaction total of ₱${cart.reduce((sum, i) => sum + (i.price * i.qty), 0).toFixed(2)}?`)) return;

    const now = new Date();
    const transaction = {
        id: Date.now(),
        date: now.toISOString(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.qty), 0)
    };

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    cart = [];
    renderCart();
    alert('Transaction Saved Successfully!');
}

// --- Report & Monitoring Logic ---

function openReportModal(type) {
    const modal = document.getElementById('reportModal');
    const titleEl = document.getElementById('modalTitle');
    const bodyEl = document.getElementById('modalBody');
    
    const now = new Date();
    let filtered = [];
    let title = '';

    if (type === 'daily') {
        title = 'DAILY SUMMARY REPORT';
        filtered = transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate.toDateString() === now.toDateString();
        });
    } else if (type === 'weekly') {
        title = 'WEEKLY SUMMARY REPORT';
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        filtered = transactions.filter(t => new Date(t.date) >= weekAgo);
    }

    titleEl.innerText = title;
    
    // Aggregate items
    let reportItems = {};
    filtered.forEach(t => {
        t.items.forEach(item => {
            if (!reportItems[item.name]) {
                reportItems[item.name] = { qty: 0, total: 0, price: item.price };
            }
            reportItems[item.name].qty += item.qty;
            reportItems[item.name].total += (item.price * item.qty);
        });
    });

    // Sort Alphabetically
    const sortedKeys = Object.keys(reportItems).sort();

    let grandTotal = 0;
    let tableRows = '';
    
    if (sortedKeys.length === 0) {
        tableRows = '<tr><td colspan="4" class="text-center">No transactions recorded for this period.</td></tr>';
    } else {
        sortedKeys.forEach(name => {
            const r = reportItems[name];
            grandTotal += r.total;
            tableRows += `
                <tr>
                    <td>${name}</td>
                    <td class="text-center">${r.qty}</td>
                    <td class="text-right">₱${r.price.toFixed(2)}</td>
                    <td class="text-right">₱${r.total.toFixed(2)}</td>
                </tr>
            `;
        });
    }

    bodyEl.innerHTML = `
        <p style="color:#666; margin-bottom:15px;">Generated on: ${now.toLocaleString()}</p>
        <table>
            <thead>
                <tr>
                    <th>Medicine Name</th>
                    <th class="text-center">Qty</th>
                    <th class="text-right">Price</th>
                    <th class="text-right">Total</th>
                </tr>
            </thead>
            <tbody>${tableRows}</tbody>
            <tfoot>
                <tr style="background:#f3f4f6; font-weight:bold;">
                    <td colspan="3" class="text-right">GRAND TOTAL:</td>
                    <td class="text-right">₱${grandTotal.toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    `;

    modal.style.display = 'block';
}

function openTransactionMonitor() {
    const modal = document.getElementById('reportModal');
    const titleEl = document.getElementById('modalTitle');
    const bodyEl = document.getElementById('modalBody');

    titleEl.innerText = 'TRANSACTION MONITORING (Chronological)';

    // Sort transactions by date (newest first or oldest first? Request said chronological, usually oldest to newest for history, but latest on top for monitoring. Let's do Newest First for monitoring)
    const sortedTrans = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

    let content = '';
    if (sortedTrans.length === 0) {
        content = '<p class="placeholder-text">No transactions recorded yet.</p>';
    } else {
        sortedTrans.forEach((t, index) => {
            const dateObj = new Date(t.date);
            let itemsList = '<ul style="padding-left:20px; margin:5px 0; font-size:13px;">';
            t.items.forEach(item => {
                itemsList += `<li>${item.name} (x${item.qty}) - ₱${(item.price * item.qty).toFixed(2)}</li>`;
            });
            itemsList += '</ul>';

            content += `
                <div style="border:1px solid #eee; padding:15px; margin-bottom:15px; border-radius:6px; background:#fafafa;">
                    <div style="display:flex; justify-content:space-between; border-bottom:1px solid #ddd; padding-bottom:5px; margin-bottom:5px;">
                        <strong>Trans #${t.id.toString().slice(-6)}</strong>
                        <span>${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}</span>
                    </div>
                    <div>${itemsList}</div>
                    <div style="text-align:right; font-weight:bold; margin-top:5px;">Total: ₱${t.total.toFixed(2)}</div>
                </div>
            `;
        });
    }

    bodyEl.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('reportModal').style.display = 'none';
}

function printContent() {
    const printContents = document.getElementById('modalBody').innerHTML;
    const title = document.getElementById('modalTitle').innerText;
    const originalContents = document.body.innerHTML;

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(`
        <html><head><title>${title}</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; }
            th { background: #f3f4f6; }
            .text-right { text-align: right; }
            .text-center { text-align: center; }
        </style></head><body>
        <h2>${title}</h2>
        ${printContents}
        <script>window.onload = function() { window.print(); }<\/script>
        </body></html>
    `);
    printWindow.document.close();
}

function saveAsPDF() {
    // Simple trick: Open print dialog and instruct user to "Save as PDF"
    // Browsers handle PDF saving via the Print dialog nowadays.
    printContent();
    alert("Tip: In the Print dialog, change the Destination to 'Save as PDF' to download the file.");
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('reportModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Initialize
window.addEventListener('load', () => {
    checkOrientation();
    renderMeds();
    renderCart();
});
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);