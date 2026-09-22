// script.js
let medicines = JSON.parse(localStorage.getItem('medicines')) || [
    { id: 1, name: 'Biogesic 500mg', price: 5.50, favorite: false },
    { id: 2, name: 'Amoxicillin 500mg', price: 12.00, favorite: false },
    { id: 3, name: 'Neozep Forte', price: 8.50, favorite: false },
    { id: 4, name: 'Strepsils', price: 15.00, favorite: false },
    { id: 5, name: 'Kremil-S', price: 6.00, favorite: false },
    { id: 6, name: 'Vitamin C 500mg', price: 10.00, favorite: false },
    { id: 7, name: 'Loperamide 2mg', price: 9.00, favorite: false },
    { id: 8, name: 'Cetirizine 10mg', price: 11.00, favorite: false }
];

let cart = [];
let selectedMed = null;
let selectedQty = 0;
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Save initial meds if empty
if (!localStorage.getItem('medicines')) {
    localStorage.setItem('medicines', JSON.stringify(medicines));
}

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

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

function toggleFavorite(e, id) {
    e.stopPropagation();
    const med = medicines.find(m => m.id === id);
    if (med) {
        med.favorite = !med.favorite;
        localStorage.setItem('medicines', JSON.stringify(medicines));
        renderMeds();
    }
}

function renderMeds() {
    const grid = document.getElementById('medsGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    grid.innerHTML = '';

    // Sort: Favorites first, then Alphabetical
    const sortedMeds = [...medicines].sort((a, b) => {
        if (a.favorite === b.favorite) {
            return a.name.localeCompare(b.name);
        }
        return a.favorite ? -1 : 1;
    });

    sortedMeds.filter(m => m.name.toLowerCase().includes(search)).forEach(med => {
        const btn = document.createElement('div');
        btn.className = 'med-btn' + (selectedMed && selectedMed.id === med.id ? ' active' : '');
        
        const favIcon = med.favorite ? '★' : '☆';
        const favClass = med.favorite ? 'med-fav-icon active' : 'med-fav-icon';

        btn.innerHTML = `
            <div class="${favClass}" onclick="toggleFavorite(event, ${med.id})">${favIcon}</div>
            <div class="med-name">${med.name}</div>
            <div class="med-price">₱${med.price.toFixed(2)}</div>
        `;
        btn.onclick = (e) => {
            if(e.target.className !== 'med-fav-icon' && e.target.className !== 'med-fav-icon active') {
                selectMed(med);
            }
        };
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
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-qty">Qty: ${item.qty} x ₱${item.price.toFixed(2)}</div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <div class="cart-item-total">₱${itemTotal.toFixed(2)}</div>
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
    document.getElementById('qtyControls').style.display = 'flex';
    document.getElementById('qtyInput').value = 0;
    updateSelectedInfo();
    renderMeds();
}

function updateSelectedInfo() {
    if(!selectedMed) return;
    document.getElementById('selectedInfo').innerHTML = `
        <div style="font-weight:bold; font-size:16px;">${selectedMed.name}</div>
        <div style="color:#4b5563; margin-top:5px;">Price: ₱${selectedMed.price.toFixed(2)}</div>
    `;
}

function adjustQty(change) {
    if (!selectedMed) return;
    selectedQty += change;
    if (selectedQty < 0) selectedQty = 0;
    document.getElementById('qtyInput').value = selectedQty;
    updateSelectedInfo();
}

function manualQtyChange(val) {
    if (!selectedMed) return;
    selectedQty = parseInt(val) || 0;
    if (selectedQty < 0) selectedQty = 0;
    updateSelectedInfo();
}

function focusQtyInput() {
    if (!selectedMed) {
        alert('Please select a medicine first!');
        return;
    }
    document.getElementById('qtyControls').style.display = 'flex';
    document.getElementById('qtyInput').focus();
}

function setQty(qty) {
    if (!selectedMed) {
        alert('Please select a medicine first!');
        return;
    }
    selectedQty = qty;
    document.getElementById('qtyInput').value = qty;
    updateSelectedInfo();
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
        cart.push({ id: selectedMed.id, name: selectedMed.name, price: selectedMed.price, qty: selectedQty });
    }

    selectedMed = null;
    selectedQty = 0;
    document.getElementById('selectedInfo').innerHTML = '<div class="placeholder-text">Select a medicine</div>';
    document.getElementById('qtyControls').style.display = 'none';
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
    document.getElementById('selectedInfo').innerHTML = '<div class="placeholder-text">Select a medicine</div>';
    document.getElementById('qtyControls').style.display = 'none';
    renderMeds();
}

function checkout() {
    if (cart.length === 0) return;
    
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

// Modal Functions
function openReportModal(type) {
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

    let grandTotal = 0;
    let tableRows = '';
    // Sort alphabetically
    const sortedKeys = Object.keys(reportItems).sort();
    
    sortedKeys.forEach(name => {
        const r = reportItems[name];
        grandTotal += r.total;
        tableRows += `<tr>
            <td>${name}</td>
            <td class="text-center">${r.qty}</td>
            <td class="text-right">₱${r.price.toFixed(2)}</td>
            <td class="text-right">₱${r.total.toFixed(2)}</td>
        </tr>`;
    });

    const modal = document.getElementById('reportModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerHTML = `
        <p>Generated on: ${now.toLocaleString()}</p>
        <table>
            <thead><tr><th>Medicine Name</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
            <tbody>${tableRows || '<tr><td colspan="4" class="text-center">No transactions recorded.</td></tr>'}</tbody>
        </table>
        <div style="margin-top:20px; font-weight:bold; font-size:18px; text-align:right;">Grand Total: ₱${grandTotal.toFixed(2)}</div>
    `;
    modal.style.display = 'block';
}

function openTransactionMonitor() {
    const modal = document.getElementById('reportModal');
    document.getElementById('modalTitle').innerText = 'TRANSACTION HISTORY (Chronological)';
    
    // Sort by date descending (newest first) or ascending? Request says chronological (usually oldest to newest for history, but newest first for monitoring). Let's do Newest First.
    const sortedTrans = [...transactions].sort((a, b) => b.id - a.id);

    let html = '<table><thead><tr><th>ID / Time</th><th>Items</th><th>Total</th></tr></thead><tbody>';
    
    sortedTrans.forEach(t => {
        const dateObj = new Date(t.date);
        const timeStr = dateObj.toLocaleString();
        const itemsStr = t.items.map(i => `${i.qty}x ${i.name}`).join(', ');
        
        html += `<tr>
            <td style="font-size:12px;">#${t.id}<br>${timeStr}</td>
            <td>${itemsStr}</td>
            <td class="text-right">₱${t.total.toFixed(2)}</td>
        </tr>`;
    });

    html += '</tbody></table>';
    if(transactions.length === 0) html = '<p class="placeholder-text">No transactions yet.</p>';

    document.getElementById('modalBody').innerHTML = html;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('reportModal').style.display = 'none';
}

function printContent() {
    const printContents = document.getElementById('modalBody').innerHTML;
    const title = document.getElementById('modalTitle').innerText;
    const win = window.open('', '', 'height=600,width=800');
    win.document.write('<html><head><title>' + title + '</title>');
    win.document.write('<style>body{font-family:Arial;} table{width:100%;border-collapse:collapse;} th,td{border:1px solid #ddd;padding:8px;} th{background:#f4f4f4;}</style>');
    win.document.write('</head><body>');
    win.document.write('<h2>' + title + '</h2>');
    win.document.write(printContents);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
}

function saveAsPDF() {
    // Browser native print to PDF is the most reliable client-side method without libraries
    printContent(); 
    alert("Tip: Sa print dialog, piliin ang 'Save as PDF' sa destination.");
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('reportModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

renderMeds();
renderCart();