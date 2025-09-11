import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Cloudflare Forms検出用の隠しフォーム */}
      <form name="contact" method="POST" data-cloudflare-form="true" hidden>
        <input name="familyName" />
        <input name="firstName" />
        <input name="email" />
        <input name="nationality" />
        <input name="company" />
        <textarea name="businessContent" />
      </form>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-900">無料相談のお申込み</h1>
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              無料相談のお申込み
            </h2>
            <p className="text-lg text-slate-600 mb-2">
              日本語でのZoom面談（<strong>限定3社</strong>、<strong>9/14(日)締切</strong>）をご希望の方は下記フォームよりお申し込みください。
            </p>
            <p className="text-sm text-slate-500">
              ※送信後、担当者より24時間以内にご連絡いたします。
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
                        <form
                          name="contact"
                          method="POST"
                          data-cloudflare-form="true"
                          className="grid gap-6"
                        >
              {/* Cloudflare Forms用の設定 */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Family Name Field */}
              <div>
                <label htmlFor="familyName" className="block text-sm font-medium text-slate-700 mb-2">
                  姓（ファミリーネーム） <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="familyName"
                  name="familyName" 
                  placeholder="山田" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* First Name Field */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  名（ファーストネーム） <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName" 
                  placeholder="太郎" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="yamada@example.com" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Nationality Field */}
              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-slate-700 mb-2">
                  国籍 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="nationality"
                  name="nationality" 
                  placeholder="例：日本、中国、韓国、アメリカなど" 
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  会社名・事業名 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="company"
                  name="company" 
                  placeholder="株式会社サンプル" 
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Business Content Field */}
              <div>
                <label htmlFor="businessContent" className="block text-sm font-medium text-slate-700 mb-2">
                  事業内容 <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="businessContent"
                  name="businessContent" 
                  rows={6} 
                  placeholder="事業内容について詳しくお書きください。例：ITコンサルティング、貿易業、飲食店経営、不動産投資、教育事業など" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical" 
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg"
                >
                  無料相談を申し込む
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
