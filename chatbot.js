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
                    Almanya'da doktorluk, hemşirelik, fizyoterapi, dil eğitimi veya vize süreçleri hakkında size nasıl yardımcı olabilirim?
                </div>
                <div class="sirius-ai-quick-options">
                    <button class="sirius-ai-chip" data-query="Medicare nedir?">🏥 Medicare Nedir?</button>
                    <button class="sirius-ai-chip" data-query="Hangi dil eğitimi var?">🇩🇪 Dil Akademisi</button>
                    <button class="sirius-ai-chip" data-query="Konaklama desteği var mı?">🏠 Ev & Konaklama</button>
                    <button class="sirius-ai-chip" data-query="İletişim bilgisi">📞 İletişim & Randevu</button>
                </div>
            </div>
            <div class="sirius-ai-chat-input-container">
                <input type="text" class="sirius-ai-input" id="sirius-ai-input-field" placeholder="Bir soru sorun... (Örn: Hemşirelik şartları nelerdir?)">
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

        if (q.includes('medicare') || q.includes('sağlık') || q.includes('doktor') || q.includes('hemşire')) {
            return `<strong>Sirius Medicare</strong>, Almanya'da çalışmak isteyen doktorlar, hemşireler, fizyoterapistler ve MTR teknikerleri için klinik eşleştirmesi, mesleki denklik ve vize sürecini uçtan uca yönetir.<br><br>👉 <a href="sirius-medicare.html" style="color:var(--sirius-teal); font-weight:700;">Medicare Programlarını İnceleyin</a>`;
        }

        if (q.includes('dil') || q.includes('almanca') || q.includes('akademi') || q.includes('kurs') || q.includes('fsp')) {
            return `<strong>Sirius Akademi</strong> ile A1'den C1 Tıp Almancasına (FSP) kadar telc & Goethe sınavlarına hazırlayan interaktif dil eğitimi sunuyoruz. Derslerimiz anadili Almanca olan uzman eğitmenlerle yürütülür.<br><br>👉 <a href="sirius-akademi.html" style="color:var(--sirius-teal); font-weight:700;">Sirius Akademi Detayları</a>`;
        }

        if (q.includes('ev') || q.includes('konaklama') || q.includes('relokasyon') || q.includes('home') || q.includes('anmeldung')) {
            return `<strong>Sirius Home</strong> servisimiz ile Almanya'ya indiğinizde eşyalı hazır eviniz teslim edilir, havalimanında karşılanırsınız ve resmi ikamet kaydınız (Anmeldung) tamamlanır.<br><br>👉 <a href="sirius-home.html" style="color:var(--sirius-teal); font-weight:700;">Sirius Home Hizmetleri</a>`;
        }

        if (q.includes('iletişim') || q.includes('telefon') || q.includes('adres') || q.includes('yasemin') || q.includes('randevu')) {
            return `<strong>Essen Genel Merkez İletişim:</strong><br>
                    👤 İlgili Kişi: Yasemin Acar<br>
                    📞 Tel: <a href="tel:+4917661645779" style="color:var(--sirius-teal);">+49 176 61645779</a><br>
                    ✉️ E-posta: <a href="mailto:info@siriusglobal.de" style="color:var(--sirius-teal);">info@siriusglobal.de</a><br>
                    📍 Adres: Katernberger Str. 107, 45327 Essen, Almanya`;
        }

        if (q.includes('denklik') || q.includes('anerkennung') || q.includes('vize')) {
            return `Eyalet Sağlık Daireleri (Bezirksregierung) nezdinde mesleki denklik (Anerkennung) başvuruları, evrak tercümeleri ve vize takip işlemleri uzman ekibimiz tarafından yürütülmektedir.`;
        }

        return `Talebinizle ilgili size en doğru bilgiyi sunabilmemiz için hemen uzman danışmanımız <strong>Yasemin Acar</strong> ile iletişime geçebilirsiniz:<br><br>📞 <strong>+49 176 61645779</strong><br>✉️ <strong>info@siriusglobal.de</strong> veya sitemizdeki <a href="iletisim.html" style="color:var(--sirius-teal); font-weight:700;">İletişim Formunu</a> doldurabilirsiniz.`;
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadKnowledgeBase();
        createChatbotUI();
    });
})();
