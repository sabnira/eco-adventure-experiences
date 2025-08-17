import faqImg from "../assets/girl.png"

const Faqs = () => {
    return (
        <div id="faqs" className="mt-16 bg-[#E6F3F6] py-16">

            <div className="w-11/12 mx-auto grid grid-col-1 lg:grid-cols-2">

                <div className="w-[65%] h-full mx-auto">
                    <img className="w-full h-full object-cover" src={faqImg} alt="" />
                </div>

                <div className="space-y-2">

                    <h4 className="text-[#0D3A48] font-bold text-lg font-gloock m-0">FAQs</h4>
                    <p className="text-[#0D3A48] text-4xl pb-6">Answers to Your Hiking Questions</p>

                    <div className="collapse collapse-plus border p-2">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-thin text-xl">What should I pack for a day hike?</div>
                        <div className="collapse-content text-gray-600">
                            Bring essentials like water, snacks, a map or GPS, sunscreen, a hat, a small first aid kit, a flashlight, and a light jacket. Good hiking shoes are a must.
                        </div>
                    </div>

                   <div className="collapse collapse-plus border p-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-thin text-xl">How can I stay safe while hiking?</div>
                        <div className="collapse-content text-gray-600">
                            Stay on marked trails, check the weather, carry enough water, let someone know your plans, and always hike with a buddy if possible. Avoid risky shortcuts.
                        </div>
                    </div>

                    <div className="collapse collapse-plus border p-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-thin text-xl">What should I do if I encounter wildlife?</div>
                        <div className="collapse-content text-gray-600">
                            Stay calm, keep your distance, and never feed animals. Make yourself look bigger if confronted, and slowly back away without turning your back.
                        </div>
                    </div>

                    <div className="collapse collapse-plus border p-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-thin text-xl">What are Leave No Trace principles?</div>
                        <div className="collapse-content text-gray-600">
                            They are guidelines for outdoor ethics: plan ahead, stay on trails, dispose of waste properly, leave what you find, minimize campfire impact, respect wildlife, and be considerate of others.
                        </div>
                    </div>

                    <div className="collapse collapse-plus border p-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-thin text-xl">How do I prepare for a multi-day hike?</div>
                        <div className="collapse-content text-gray-600">
                            Train with shorter hikes, pack light but with essentials (tent, sleeping bag, food, water filter, navigation tools), check trail conditions, and plan your route and campsites in advance.
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Faqs;