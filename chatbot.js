/* ==========================================
   SIRIUS AI ASSISTANT CHATBOT ENGINE
   ========================================== */

(function () {
    let aiKnowledgeBase = null;

    // Load Knowledge Base JSON dataset from /kb/sirius_bilgi_bankasi.json
    async function loadKnowledgeBase() {
        try {
            const response = await fetch('kb/sirius_bilgi_bankasi.json');
            if (response.ok) {
                aiKnowledgeBase = await response.json();
            }
        } catch (e) {
            console.log('AI Knowledge Base local load fallback active.');
        }
    }

    function createChatbotUI() {
        // Floating Trigger Button
        const triggerBtn = document.createElement('button');
        triggerBtn.className = 'sirius-ai-trigger-btn';
        triggerBtn.setAttribute('aria-label', 'Yapay Zeka Canlı Asistanı Aç');
        triggerBtn.innerHTML = `
            <i class="fa-solid fa-robot"></i>
            <span class="sirius-ai-badge">AI</span>
        `;

        // Chat Window HTML
        const chatWindow = document.createElement('div');
        chatWindow.className = 'sirius-ai-chat-window';
        chatWindow.innerHTML = `
            <div class="sirius-ai-chat-header">
                <div class="sirius-ai-avatar-box">
                    <div class="sirius-ai-avatar">
                        <i class="fa-solid fa-brain"></i>
                    </div>
                    <div class="sirius-ai-header-info">
                        <h4>Sirius AI Asistanı</h4>
                        <span>Canlı & Çevrimiçi</span>
                    </div>
                </div>
                <button class="sirius-ai-close-btn" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="sirius-ai-chat-messages" id="sirius-ai-messages">
                <div class="sirius-ai-msg bot">
                    Merhaba! Ben <strong>Sirius AI Asistanı</strong>. 🤖<br>
                    Almanya'da doktorluk, hemşirelik, fizyoterapi, denklik, ücretler veya vize süreçleri hakkında size nasıl yardımcı olabilirim?
                </div>
                <div class="sirius-ai-quick-options">
                    <button class="sirius-ai-chip" data-query="Ücretler nedir?">💰 Danışmanlık Ücreti</button>
                    <button class="sirius-ai-chip" data-query="Denklik kaç ay sürer?">⏳ Denklik Süresi (NRW)</button>
                    <button class="sirius-ai-chip" data-query="Fizyoterapi şartları">🩺 Fizyoterapi & B2</button>
                    <button class="sirius-ai-chip" data-query="İletişim bilgisi">📞 İletişim & Randevu</button>
                </div>
            </div>
            <div class="sirius-ai-chat-input-container">
                <input type="text" class="sirius-ai-input" id="sirius-ai-input-field" placeholder="Bir soru sorun... (Örn: İşe yerleştirme ücretli mi?)">
                <button class="sirius-ai-send-btn" id="sirius-ai-send-trigger" aria-label="Gönder">
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        `;

        document.body.appendChild(triggerBtn);
        document.body.appendChild(chatWindow);

        // Toggle Events
        triggerBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
        });

        const closeBtn = chatWindow.querySelector('.sirius-ai-close-btn');
        closeBtn.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });

        // Auto Pop-up on First Visit (after 3.5 seconds if not seen before in session)
        if (!sessionStorage.getItem('sirius_ai_popup_seen')) {
            setTimeout(() => {
                chatWindow.classList.add('active');
                sessionStorage.setItem('sirius_ai_popup_seen', 'true');
            }, 3500);
        }

        // Handle sending user input
        const inputField = chatWindow.querySelector('#sirius-ai-input-field');
        const sendBtn = chatWindow.querySelector('#sirius-ai-send-trigger');
        const messagesContainer = chatWindow.querySelector('#sirius-ai-messages');

        function sendMessage(queryText) {
            const text = queryText || inputField.value.trim();
            if (!text) return;

            // Add User Message
            const userMsg = document.createElement('div');
            userMsg.className = 'sirius-ai-msg user';
            userMsg.textContent = text;
            messagesContainer.appendChild(userMsg);

            if (!queryText) inputField.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // Generate AI Answer
            setTimeout(() => {
                const botReply = generateAIResponse(text);
                const botMsg = document.createElement('div');
                botMsg.className = 'sirius-ai-msg bot';
                botMsg.innerHTML = botReply;
                messagesContainer.appendChild(botMsg);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 600);
        }

        sendBtn.addEventListener('click', () => sendMessage());
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // Quick chip clicks
        messagesContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('sirius-ai-chip')) {
                const query = e.target.getAttribute('data-query');
                sendMessage(query);
            }
        });
    }

    // AI Query Matching Logic using Knowledge Base
    function generateAIResponse(query) {
        const q = query.toLowerCase();

        if (q.includes('ücret') || q.includes('fiyat') || q.includes('maliyet') || q.includes('paralı') || q.includes('ücretsiz')) {
            return `Sirius Global olarak <strong>yalnızca Mesleki Denklik Danışmanlığı ücreti</strong> almaktayız.<br><br>✅ <strong>İşe yerleştirme, mülakat organizasyonları ve iş sözleşmesi aşamasındaki tüm hizmetlerimiz tamamen ÜCRETSİZDİR.</strong><br><br>📌 <em>Not: Tercüme, posta masrafları ve eyalet denklik merkezlerinin harçları (ortalama 150 Euro) adaya aittir.</em>`;
        }

        if (q.includes('nrw') || q.includes('eyalet') || q.includes('süresi') || q.includes('kaç ay') || q.includes('iş kanıtı') || q.includes('zusage')) {
            return `Nordrhein-Westfalen (NRW / Essen) eyaletinde <strong>normal denklik süreci ortalama 6 ay</strong> sürmektedir.<br><br>📌 <strong>31 Mayıs 2024 Kuralları:</strong> Denklik başvurusunda iş sözleşmesi veya 3 işverenle görüştüğüne dair yazılı iş kanıtı / 1 kabul beyanı (Zusage) istenmektedir. Denklik Birimimiz iş kanıtı temininde adaylarımıza tam destek vermektedir. Mart 2024 itibarıyla evrak tercümelerinin Almanya'da yapılması zorunludur.`;
        }

        if (q.includes('birim') || q.includes('ekip') || q.includes('nasıl çalış')) {
            return `Sirius Global <strong>3 birim halinde</strong> adaylarımıza hizmet vermektedir:<br><br>
                    1️⃣ <strong>Ana Danışmanlar:</strong> İlk temas, bilgi/belge toparlama ve süreç takibi.<br>
                    2️⃣ <strong>Denklik Birimi:</strong> Eyalet nezdinde vekaleten resmi denklik yürütme.<br>
                    3️⃣ <strong>İşveren Servisi:</strong> Ön mülakat, işveren görüşmeleri, vize, karşılama ve konaklama.`;
        }

        if (q.includes('fizyoterapi') || q.includes('fizyoterapist') || q.includes('ergoterapi') || q.includes('physio')) {
            return `Almanya'da <strong>fizyoterapist & ergoterapist</strong> olarak çalışabilmek için:<br>
                    • Lisans diploması veya denkliği<br>
                    • <strong>B2 düzeyinde Telc, Goethe veya ÖSD</strong> dil sertifikası<br>
                    • İş sözleşmesi ve vize gereklidir.<br><br> Sirius olarak adaylarımızı B2 sertifikası sonrasında çoğunlukla NRW (Essen) eyaletinde işe yerleştirmekteyiz.<br><br>👉 <a href="sirius-medicare.html#physio" style="color:var(--sirius-teal); font-weight:700;">Fizyoterapi Detayları</a>`;
        }

        if (q.includes('telegram') || q.includes('grup') || q.includes('topluluk') || q.includes('instagram')) {
            return `Sosyal medyada aday topluluklarımıza katılabilirsiniz:<br><br>
                    📱 <a href="https://t.me/almanyadasaglikpersoneli" target="_blank" style="color:var(--sirius-teal); font-weight:700;">5000+ Üyeli Telegram Sağlık Grubu</a><br>
                    📸 <a href="https://www.instagram.com/sirius_global/" target="_blank" style="color:var(--sirius-teal); font-weight:700;">@sirius_global Instagram Hesabı</a>`;
        }

        if (q.includes('medicare') || q.includes('sağlık') || q.includes('doktor') || q.includes('hemşire')) {
            return `<strong>Sirius Medicare</strong>, lisans mezunu ve Almanca eğitimi alan fizyoterapist, ergoterapist, hemşire (2017 öncesi lise hemşireleri dahil) ve doktorlar için klinik eşleştirmesi, mesleki denklik ve vize sürecini uçtan uca yönetir.<br><br>👉 <a href="sirius-medicare.html" style="color:var(--sirius-teal); font-weight:700;">Medicare Programlarını İnceleyin</a>`;
        }

        if (q.includes('dil') || q.includes('almanca') || q.includes('akademi') || q.includes('kurs') || q.includes('fsp')) {
            return `<strong>Sirius Akademi</strong> ile A1'den C1 Tıp Almancasına (FSP) kadar telc & Goethe sınavlarına hazırlayan interaktif dil eğitimi sunuyoruz.<br><br>👉 <a href="sirius-akademi.html" style="color:var(--sirius-teal); font-weight:700;">Sirius Akademi Detayları</a>`;
        }

        if (q.includes('ev') || q.includes('konaklama') || q.includes('relokasyon') || q.includes('home') || q.includes('anmeldung')) {
            return `<strong>Sirius Home</strong> ile havalimanında karşılama, konaklanacak yer temininde destek, ikametgah kaydı (Anmeldung), banka açılışı ve ilk 3 ay resmi işlemlerde destek sunuyoruz.<br><br>👉 <a href="sirius-home.html" style="color:var(--sirius-teal); font-weight:700;">Sirius Home Hizmetleri</a>`;
        }

        if (q.includes('iletişim') || q.includes('telefon') || q.includes('adres') || q.includes('yasemin') || q.includes('randevu')) {
            return `<strong>Essen Genel Merkez İletişim:</strong><br>
                    👤 İlgili Kişi: Yasemin Acar<br>
                    📞 Tel: <a href="tel:+4917661645779" style="color:var(--sirius-teal);">+49 176 61645779</a><br>
                    ✉️ E-posta: <a href="mailto:info@siriusglobal.de" style="color:var(--sirius-teal);">info@siriusglobal.de</a><br>
                    📍 Adres: Katernberger Str. 107, 45327 Essen, Almanya`;
        }

        if (q.includes('denklik') || q.includes('anerkennung') || q.includes('vize')) {
            return `Mesleki denklik (Anerkennung) sürecinizi vekaleten yürütüyor; ön onaylı vize, mülakat hazırlığı ve eyalet sağlık dairesi yazışmalarını üstleniyoruz.`;
        }

        return `Talebinizle ilgili size en doğru bilgiyi sunabilmemiz için hemen uzman danışmanımız <strong>Yasemin Acar</strong> ile iletişime geçebilirsiniz:<br><br>📞 <strong>+49 176 61645779</strong><br>✉️ <strong>info@siriusglobal.de</strong> veya sitemizdeki <a href="iletisim.html" style="color:var(--sirius-teal); font-weight:700;">İletişim Formunu</a> doldurabilirsiniz.`;
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadKnowledgeBase();
        createChatbotUI();
    });
})();
