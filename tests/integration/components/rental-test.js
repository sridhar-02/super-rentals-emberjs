import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render,click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders information about a rental property", async function (assert) {
    await render(hbs`<Rental />`);

    assert.dom("article").hasClass("rental");
    assert.dom("article h3").hasText("Grand Old Mansion");
    assert.dom("article h3").hasText("Grand Old Mansion");
    assert.dom("article .detail.owner").includesText("Veruca Salt");
    assert.dom("article .detail.type").includesText("Standalone");
    assert.dom("article .detail.location").includesText("San Francisco");
    assert.dom("article .detail.bedrooms").includesText("15");
    assert.dom('article .image').exists();
  });
  test('clicking on the component toggles its size', async function (assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
